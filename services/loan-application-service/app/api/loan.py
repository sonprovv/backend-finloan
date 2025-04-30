from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.loan_application import LoanApplicationResponse, LoanApplicationCreateRequest
from app.services import loan_application_service

router = APIRouter()


@router.post("/loans", response_model=LoanApplicationResponse)
def create_loan(loan_in: LoanApplicationCreateRequest, db: Session = Depends(get_db)):
    return loan_application_service.create_loan(db, loan_in)


@router.get("/loans/{loan_id}", response_model=LoanApplicationResponse)
def read_loan(loan_id: int, db: Session = Depends(get_db)):
    return loan_application_service.get_loan(db, loan_id)


@router.get("/loans", response_model=List[LoanApplicationResponse])
def list_loans(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return loan_application_service.list_loans(db, skip=skip, limit=limit)
