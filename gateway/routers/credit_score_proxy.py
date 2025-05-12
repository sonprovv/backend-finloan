from fastapi import APIRouter, Request
import httpx

import logging

logger = logging.getLogger(__name__)

router = APIRouter()

CREDIT_SCORE_SERVICE_URL = "http://credit-score-service:8005"


@router.get("/credit-score/{customer_id}")
async def get_risk_assessment(request: Request, customer_id: int):
    """
    Fetch risk assessment for a given customer ID.
    """
    logger.info(f"Fetching credit score for customer ID {customer_id}")
    async with httpx.AsyncClient() as client:
        res = await client.get(f"{CREDIT_SCORE_SERVICE_URL}/api/credit-score/{customer_id}")
    return res.json()