"""
Name: db_deploy.py

Description:  Deploys a database, roles, users, schema, and tables.
"""
import os
from os import walk
import logging
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT, ISOLATION_LEVEL_READ_COMMITTED
import utils
import utils.database
from utils.database import DbError, ResourceExists


# Set Global Variables
_LOG = logging.getLogger(__name__)

class DatabaseError(Exception):
    """
    Exception to be raised when there's a database error.
    """

def task(event, context):    #pylint: disable-msg=unused-argument
    """
    Task called by the handler to perform the work.

    This task will create the database, roles, users, schema, and tables.

        Args:
            event (dict): passed through from the handler
            context (Object): passed through from the handler

        Returns:
            dict: dict containing granuleId and keys. See handler for detail.

        Raises:
            DatabaseError: An error occurred.
    """
    sep = os.path.sep
    current_dir = os.getcwd()
    print("current_dir: ", current_dir)
    _LOG.info(f"current_dir: {current_dir}")
    status = log_status("start")
    db_name = os.environ["DATABASE_NAME"]
    db_user = os.environ["DATABASE_USER"]
    os.environ["DATABASE_NAME"] = "postgres"
    os.environ["DATABASE_USER"] = "postgres"
    con = get_db_connnection()
    status = log_status("connected to postgres")
    platform = os.environ["PLATFORM"]
    print("platform: ", platform)
    _LOG.info(f"platform: {platform}")

    con.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
    cur = get_cursor(con)
    drop = os.environ["DROP_DATABASE"]
    if drop == "True":
        sql_file = f"database{sep}database_drop.sql"
        status = execute_sql_from_file(cur, sql_file, "drop database")
    try:
        sql_file = f"database{sep}database_create.sql"
        status = execute_sql_from_file(cur, sql_file, "database create")
        sql_file = f"database{sep}database_comment.sql"
        status = execute_sql_from_file(cur, sql_file, "database comment")
        db_existed = False
    except ResourceExists as err:
        _LOG.warning(f"ResourceExists: {str(err)}")
        db_existed = True
        status = log_status("database already exists")
    except DatabaseError as err:
        _LOG.warning(f"ResourceExists: {str(err)}")
        db_existed = True
        status = log_status("DbError")
    cur.close()

    print("db_existed: ", db_existed)
    if not db_existed:
        con.set_isolation_level(ISOLATION_LEVEL_READ_COMMITTED)
        cur = get_cursor(con)
        sql_file = f"roles{sep}app_role.sql"
        status = execute_sql_from_file(cur, sql_file, "create application role")
        sql_file = f"roles{sep}appdbo_role.sql"
        status = execute_sql_from_file(cur, sql_file, "create appdbo role")
        sql_file = f"users{sep}dbo.sql"
        status = execute_sql_from_file(cur, sql_file, "create dbo user")
        sql_file = f"users{sep}appuser.sql"
        status = execute_sql_from_file(cur, sql_file, "create application user")
        db_pw = os.environ["DATABASE_PW"]
        sql_stmt = f"ALTER USER {db_user} WITH PASSWORD '{db_pw}';"
        status = execute_sql(cur, sql_stmt, "set pw for application user")
        sql_stmt = f"ALTER USER dbo WITH PASSWORD '{db_pw}';"
        status = execute_sql(cur, sql_stmt, "set pw for dbo user")
        con.commit()
        cur.close()

    con.close()
    os.environ["DATABASE_NAME"] = db_name
    con = get_db_connnection()
    cur = get_cursor(con)
    status = log_status(f"connected to {db_name}")

    if platform == "AWS":
        sql_stmt = """SET SESSION AUTHORIZATION dbo;"""
        status = execute_sql(cur, sql_stmt, "auth dbo")

    sql_file = f"schema{sep}app.sql"
    status = execute_sql_from_file(cur, sql_file, "create schema")
    con.commit()
    cur.close()
    con.close()

    schema_dir = os.environ["SCHEMA_DIR"]
    table_dir = f"{schema_dir}{sep}tables"
    sql_files = get_files_in_dir(table_dir)
    for file in sql_files:
        sql_file = f"tables{sep}{file}"
        try:
            con = get_db_connnection()
            cur = get_cursor(con)
            sql_stmt = """SET SESSION AUTHORIZATION dbo;"""
            status = execute_sql(cur, sql_stmt, "auth dbo")
            status = execute_sql_from_file(cur, sql_file, f"create table in {sql_file}")
        except ResourceExists as dd_err:
            _LOG.warning(f"ResourceExists: {str(dd_err)}")
            status = log_status(f"table in {sql_file} already exists")

    con.commit()
    cur.close()
    con.close()
    status = log_status("database ddl execution complete")
    return status

def get_files_in_dir(directory):
    """
    Returns a list of all the filenames in the given directory.
    """
    dir_files = []
    try:
        for (_, _, filenames) in walk(directory):
            for name in filenames:
                if name != "init.sql":
                    dir_files.append(name)
    except Exception as ex:
        _LOG.error(ex)
        raise
    dir_files.sort()
    return dir_files

def log_status(status):
    """
    Logs the status of the commands
    """
    _LOG.info(status)
    print(status)
    return status

def get_db_connnection():
    """
    Gets a database connection.
    """
    try:
        log_status(f"Connect to database started")
        con = utils.database.return_connection()
        log_status(f"Connect to database completed")
    except DbError as err:
        _LOG.exception(f"DbError: {str(err)}")
        log_status("Connect to database DbError")
        raise DatabaseError(str(err))
    return con

def get_cursor(con):
    """
    Gets a cursor for the database connection.
    """
    try:
        cursor = utils.database.return_cursor(con)
    except DbError as err:
        _LOG.exception(f"DbError: {str(err)}")
        log_status("Get cursor DbError")
        raise DatabaseError(str(err))
    return cursor

def execute_sql(cur, sql_stmt, activity):
    """
    Executes the sql in a file.
    """
    try:
        status = log_status(f"{activity} started")
        utils.database.query_no_params(cur, sql_stmt)
        status = log_status(f"{activity} completed")
    except DbError as err:
        _LOG.exception(f"DbError: {str(err)}")
        log_status(f"{activity} DbError")
        raise DatabaseError(str(err))
    return status

def execute_sql_from_file(cur, sql_file, activity):
    """
    Executes the sql in a file.
    """
    schema_dir = os.environ["SCHEMA_DIR"]
    try:
        status = log_status(f"{activity} started")
        sql_path = f"{schema_dir}{sql_file}"
        utils.database.query_from_file(cur, sql_path)
        status = log_status(f"{activity} completed")
    except DbError as err:
        _LOG.exception(f"DbError: {str(err)}")
        log_status(f"{activity} DbError")
        raise DatabaseError(str(err))
    return status


def handler(event, context):            #pylint: disable-msg=unused-argument
    """Lambda handler. Extracts the key's for a granule from an input dict.

        Args:
            event (dict): A dict with one or more of the following keys:

                granule_id (string): A granule_id to retrieve
                request_id (string): A request_id (uuid) to retrieve

                Example: event: {'granuleId': 'granxyz',
                                 'request_id': 'd554f623-b926-452b-868e-f5543932e3da',
                                }

            context (Object): None

        Returns:
            dict: A dict with the following keys:

                'granules' (list(dict)): list of dict with the following keys:
                    'granuleId' (string): The id of a granule.
                    'keys' (list(string)): list of keys for the granule.

            Example:
                {"granules": [{"granuleId": "granxyz",
                             "keys": ["key1",
                                           "key2"]}]}

        Raises:
            ExtractFilePathsError: An error occurred parsing the input.
    """
    result = task(event, context)
    return result
