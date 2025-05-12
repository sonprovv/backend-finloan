from fastapi import FastAPI
from app.api import router
import logging
from app.core.database import SessionLocal
from app.db.init_db import init_db

from app.core.exception_handler import (
    http_exception_handler,
    validation_exception_handler,
    general_exception_handler,
)
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException as StarletteHTTPException

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Identity Verification Service", version="1.0.0")
app.include_router(router, prefix="/api", tags=["Identity Verification"])

app.add_exception_handler(StarletteHTTPException, http_exception_handler)
app.add_exception_handler(RequestValidationError, validation_exception_handler)
app.add_exception_handler(Exception, general_exception_handler)

@app.on_event("startup")
def startup_db_client():
    """Initialize database on startup."""
    logger.info("Starting up Identity Verification Service...")
    db = SessionLocal()
    try:
        init_db(db)
    except Exception as e:
        logger.error(f"Error initializing database: {e}")
        raise
    finally:
        db.close()
    logger.info("Database initialization complete.")

if __name__ == "__main__":
    import uvicorn

    uvicorn.run("app.main:app", host="0.0.0.0", port=8008, reload=True)