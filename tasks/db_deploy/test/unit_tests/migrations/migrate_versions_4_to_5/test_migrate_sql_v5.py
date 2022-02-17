"""
Name: test_migrate_sql_v5.py

Description: Testing library for the migrations/migrate_versions_4_to_5/migrate_sql.py.
"""

import unittest
from inspect import getmembers, isfunction

from sqlalchemy.sql.elements import TextClause

import migrations.migrate_versions_4_to_5.migrate_sql as sql


class TestOrcaSqlLogic(unittest.TestCase):
    """
    Note that currently all of the function calls in the migrate_sql.py
    return a SQL text string. The tests below
    validate the logic in the function.
    """

    def test_all_functions_return_text(self) -> None:
        """
        Validates that all functions return a type TextClause
        """

        for name, function in getmembers(sql, isfunction):
            if name not in ["text"]:
                with self.subTest(function=function):
                    if name in [
                        "reconcile_status_table_sql",
                        "reconcile_job_table_sql",
                        "reconcile_s3_object_table_sql",
                        "reconcile_catalog_mismatch_report_table_sql",
                        "reconcile_orphan_report_table_sql",
                        "reconcile_phantom_report_table_sql",
                        "orca_archive_location_bucket",
                        "create_extension",
                    ]:
                        self.assertEqual(type(function()), TextClause)
