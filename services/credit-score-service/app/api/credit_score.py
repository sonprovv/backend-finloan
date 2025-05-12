from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.services.credit_score_service import calculate_and_store_credit_score
from app.schemas.credit_score import CreditScoreReportResponse
from app.core.database import get_db

import logging

logging.basicConfig(level=logging.INFO)

router = APIRouter()

@router.get("/credit-score/{customer_id}", response_model=CreditScoreReportResponse)
async def get_credit_score_of_customer(customer_id: int, db: Session = Depends(get_db)):
    logging.info(f"Calculating credit score for customer ID: {customer_id}")

    try:
        # Call the service to calculate and store the credit score
        credit_score_report = await calculate_and_store_credit_score(db, customer_id)
        return credit_score_report
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))