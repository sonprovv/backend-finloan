import logging
import os
import subprocess
from sqlalchemy.orm import Session
from app.db.seed import create_sample_data

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def init_db(db: Session) -> None:
    """Initialize database with migrations and sample data."""
    logger.info("Initializing database...")
    
    # Run Alembic migrations
    run_migrations()
    
    # Create sample data
    create_sample_data(db)
    
    logger.info("Database initialization completed successfully.")

def run_migrations() -> None:
    """Run database migrations using Alembic."""
    logger.info("Running database migrations...")
    
    # Get the directory where alembic.ini is located
    base_dir = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    alembic_ini = os.path.join(base_dir, "alembic.ini")
    
    try:
        # Run alembic upgrade
        subprocess.run(
            ["alembic", "--config", alembic_ini, "upgrade", "head"], 
            check=True,
            capture_output=True,
            text=True
        )
        logger.info("Database migrations completed successfully.")
    except subprocess.CalledProcessError as e:
        logger.error(f"Error running migrations: {e}")
        logger.error(f"stdout: {e.stdout}")
        logger.error(f"stderr: {e.stderr}")
        raise 