from fastapi import APIRouter

# Import the router from api.py
from app.api.api import router as api_router

# Create a new main router
router = APIRouter()

# Include the API router with the prefix
router.include_router(api_router, prefix="/verifications", tags=["verifications"])

# Export the router directly
__all__ = ["router"]