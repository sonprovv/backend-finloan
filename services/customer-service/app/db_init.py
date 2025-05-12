import os
import time
from alembic import command
from alembic.config import Config
import pymysql
from sqlalchemy.engine.url import make_url
import logging
from app.core.config import settings

logging.basicConfig(level=logging.INFO)


def wait_for_db(retries: int = 10, delay: int = 10):
    """Wait for the database to be ready using DATABASE_URL."""
    db_url = make_url(settings.DATABASE_URL)
    for attempt in range(retries):
        try:
            logging.info(f"Attempting to connect to the database (Attempt {attempt + 1}/{retries})...")
            connection = pymysql.connect(
                host=db_url.host,
                port=db_url.port or 3306,
                user=db_url.username,
                password=db_url.password,
                database=db_url.database
            )
            connection.close()
            logging.info("Database is ready!")
            return
        except pymysql.err.OperationalError as e:
            logging.warning(f"Database not ready: {e}")
            time.sleep(delay)
    raise Exception("Database is not ready after multiple attempts.")


def run_migrations():
    try:
        logging.info("Waiting for the database to be ready...")
        wait_for_db()
        logging.info("Running migration...")
        base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        alembic_cfg = Config(os.path.join(base_dir, "alembic.ini"))
        command.upgrade(alembic_cfg, "head")
        logging.info("Migration completed successfully.")
    except Exception as e:
        logging.error(f"Error running migrations: {e}")
        raise