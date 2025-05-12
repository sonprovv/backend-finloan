from fastapi import APIRouter, Request
import httpx

import logging

logger = logging.getLogger(__name__)

router = APIRouter()

AUTH_SERVICE_URL = "http://auth-service:8001"


@router.post("/register")
async def register(request: Request):
    data = await request.json()
    async with httpx.AsyncClient() as client:
        res = await client.post(f"{AUTH_SERVICE_URL}/api/auth/register", json=data)
    return res.json()


@router.post("/login")
async def login(request: Request):
    data = await request.json()
    async with httpx.AsyncClient() as client:
        res = await client.post(f"{AUTH_SERVICE_URL}/api/auth/login", json=data)
    return res.json()


@router.post("/validate")
async def validate(request: Request):
    data = await request.json()
    async with httpx.AsyncClient() as client:
        res = await client.post(f"{AUTH_SERVICE_URL}/api/auth/validate", json=data)
    return res.json()


@router.get("/me")
async def me(request: Request):
    token = request.headers.get("Authorization")
    headers = {"Authorization": token}
    async with httpx.AsyncClient() as client:
        res = await client.get(f"{AUTH_SERVICE_URL}/api/auth/me", headers=headers)
    return res.json()


@router.get("/users/{user_id}/exists")
async def user_exists(request: Request, user_id: int):
    """
    Check if a user exists in the auth-service based on the user_id.
    """
    logger.info(f"Checking if user with ID {user_id} exists")
    async with httpx.AsyncClient() as client:
        res = await client.get(f"{AUTH_SERVICE_URL}/api/auth/users/{user_id}/exists")
    return res.json()