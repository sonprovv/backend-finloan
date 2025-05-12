from fastapi import APIRouter, Request
import httpx

import logging

logger = logging.getLogger(__name__)

router = APIRouter()

RISK_ASSESSMENT_SERVICE_URL = "http://risk-assessment-service:8006"


@router.get("/risk-assessment/{customer_id}")
async def get_risk_assessment(request: Request, customer_id: int):
    """
    Fetch risk assessment for a given customer ID.
    """
    logger.info(f"Fetching risk assessment for customer ID {customer_id}")
    async with httpx.AsyncClient() as client:
        res = await client.get(f"{RISK_ASSESSMENT_SERVICE_URL}/api/risk-assessment/{customer_id}")
    return res.json()