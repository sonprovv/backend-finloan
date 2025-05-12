from fastapi import APIRouter, Request, HTTPException
import httpx
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

router = APIRouter()

PAYMENT_SCHEDULING_SERVICE_URL = "http://payment-scheduling-service:8004"


async def forward_request(request: Request, path: str, method: str = "GET"):
    logger.info(f"Forwarding request to {PAYMENT_SCHEDULING_SERVICE_URL}{path} with method {method}")

    headers = {
        key: value
        for key, value in request.headers.items()
        if value is not None and key.lower() != "host"
    }

    async with httpx.AsyncClient() as client:
        if method in ["POST", "PUT", "PATCH"]:
            body = await request.body()  # read raw body bytes
            response = await client.request(
                method, f"{PAYMENT_SCHEDULING_SERVICE_URL}{path}",
                headers=headers,
                content=body,  # send raw body bytes
                params=dict(request.query_params)  # also forward query params if any
            )
        else:  # GET, DELETE
            response = await client.request(
                method, f"{PAYMENT_SCHEDULING_SERVICE_URL}{path}",
                headers=headers,
                params=dict(request.query_params)
            )

    if response.status_code >= 400:
        try:
            detail = response.json()
        except:
            detail = response.text
        raise HTTPException(status_code=response.status_code, detail=detail)

    try:
        return response.json()
    except:
        return response.text


# Payment Schedule Endpoints
@router.post("/payment-schedules")
async def create_payment_schedule(request: Request):
    return await forward_request(request, "/payment-schedules", "POST")

@router.get("/payment-schedules")
async def get_payment_schedules(request: Request):
    return await forward_request(request, "/payment-schedules", "GET")

@router.get("/payment-schedules/{id}")
async def get_payment_schedule(request: Request, id: int):
    return await forward_request(request, f"/payment-schedules/{id}", "GET")

@router.put("/payment-schedules/{id}")
async def update_payment_schedule(request: Request, id: int):
    return await forward_request(request, f"/payment-schedules/{id}", "PUT")

# Payment Endpoints
@router.post("/payments")
async def create_payment(request: Request):
    return await forward_request(request, "/payments", "POST")

@router.get("/payments")
async def get_payments(request: Request):
    return await forward_request(request, "/payments", "GET")

@router.get("/payments/{id}")
async def get_payment(request: Request, id: int):
    return await forward_request(request, f"/payments/{id}", "GET")

@router.put("/payments/{id}")
async def update_payment(request: Request, id: int):
    return await forward_request(request, f"/payments/{id}", "PUT")

# Special Payment Endpoints
@router.get("/payments/upcoming")
async def get_upcoming_payments(request: Request):
    return await forward_request(request, "/payments/upcoming", "GET")

@router.get("/payments/overdue")
async def get_overdue_payments(request: Request):
    return await forward_request(request, "/payments/overdue", "GET")

# Payment History Endpoints
@router.get("/payment-history")
async def get_payment_history(request: Request):
    return await forward_request(request, "/payment-history", "GET") 