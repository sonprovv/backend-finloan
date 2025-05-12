import httpx

import logging

logging.basicConfig(level=logging.INFO)

AUTH_SERVICE_URL = "http://auth-service:8001/api"


async def get_user_info(user_id: int):
    """
    Fetch user data from the auth-service.
    """
    async with httpx.AsyncClient() as client:
        response = await client.get(f"{AUTH_SERVICE_URL}/auth/users/{user_id}/exists")

    logging.info(f"Response from auth-service: {response.status_code}")
    logging.info(response)

    if response.status_code == 200:
        return response.json()  # Return the user information (e.g., email, username)
    else:
        raise Exception("User not found or not authorized")