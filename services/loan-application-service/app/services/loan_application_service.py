from sqlalchemy.orm import Session
from app.schemas.loan_application import LoanApplicationCreateRequest
from app.repositories import loan_application_repository

# TODO implement real business logic

def create_loan(db: Session, loan_in: LoanApplicationCreateRequest):
    return loan_application_repository.create(db, loan_in)


def get_loan(db: Session, loan_id: int):
    return loan_application_repository.get(db, loan_id)


def list_loans(db: Session, skip: int = 0, limit: int = 10):
    return loan_application_repository.list_all(db, skip=skip, limit=limit)
