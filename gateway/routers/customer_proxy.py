from fastapi import APIRouter, Request, HTTPException
import httpx

import logging

logging.basicConfig(level=logging.INFO)

router = APIRouter()

CUSTOMER_SERVICE_URL = "http://customer-service:8003/api"


async def forward_request(request: Request, path: str, method: str = "GET"):
    print(f"Forwarding request to {CUSTOMER_SERVICE_URL}{path} with method {method}")

    headers = {
        key: value
        for key, value in request.headers.items()
        if value is not None and key.lower() != "host"
    }

    async with httpx.AsyncClient() as client:
        if method in ["POST", "PUT", "PATCH"]:
            body = await request.body()  # read raw body bytes
            response = await client.request(
                method, f"{CUSTOMER_SERVICE_URL}{path}",
                headers=headers,
                content=body,  # send raw body bytes
                params=dict(request.query_params)  # also forward query params if any
            )
        else:  # GET, DELETE
            response = await client.request(
                method, f"{CUSTOMER_SERVICE_URL}{path}",
                headers=headers,
                params=dict(request.query_params)
            )

    if response.status_code >= 400:
        raise HTTPException(status_code=response.status_code, detail=response.json())

    return response.json()


# ---------- Customer Endpoints ----------

@router.get("/customers")
async def proxy_get_customers(request: Request):
    print("hit customers")
    return await forward_request(request, "/customers", "GET")


@router.get("/customers/{customer_id}")
async def proxy_get_customer(request: Request, customer_id: int):
    return await forward_request(request, f"/customers/{customer_id}", "GET")


@router.post("/customers")
async def proxy_create_customer(request: Request):
    logging.info("hit create customer")
    response = await forward_request(request, "/customers", "POST")
    logging.info(f"Response from customer service: {response}")
    return response


@router.put("/customers/{customer_id}")
async def proxy_update_customer(request: Request, customer_id: int):
    return await forward_request(request, f"/customers/{customer_id}", "PUT")


@router.delete("/customers/{customer_id}")
async def proxy_delete_customer(request: Request, customer_id: int):
    return await forward_request(request, f"/customers/{customer_id}", "DELETE")


# ---------- Financial Profile Endpoints ----------

@router.get("/customers/{customer_id}/financial-profile")
async def proxy_get_financial_profile(request: Request, customer_id: int):
    return await forward_request(request, f"/customers/{customer_id}/financial-profile", "GET")


@router.post("/customers/{customer_id}/financial-profile")
async def proxy_create_financial_profile(request: Request, customer_id: int):
    logging.info("hit create financial profile")
    return await forward_request(request, f"/customers/{customer_id}/financial-profile", "POST")


@router.put("/customers/{customer_id}/financial-profile")
async def proxy_update_financial_profile(request: Request, customer_id: int):
    return await forward_request(request, f"/customers/{customer_id}/financial-profile", "PUT")


# ---------- Credit Status Endpoints ----------

@router.get("/customers/{customer_id}/credit-status")
async def proxy_get_credit_status(request: Request, customer_id: int):
    return await forward_request(request, f"/customers/{customer_id}/credit-status", "GET")


@router.post("/customers/{customer_id}/credit-status")
async def proxy_create_credit_status(request: Request, customer_id: int):
    return await forward_request(request, f"/customers/{customer_id}/credit-status", "POST")