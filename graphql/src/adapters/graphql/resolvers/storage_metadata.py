import logging

from src.adapters.graphql.dataTypes.common import InternalServerErrorStrawberryType
from src.adapters.graphql.dataTypes.storage_metadata import \
    GetStorageSchemaVersionStrawberryResponse
from src.adapters.graphql.initialized_adapters.adapters import storage
from src.use_cases.storage_metadata import StorageMetadata


def get_storage_migration_version(logger: logging.Logger) -> \
        GetStorageSchemaVersionStrawberryResponse:
    try:
        return StorageMetadata(storage).get_schema_version(logger)
    except Exception as ex:
        return InternalServerErrorStrawberryType(ex)
