from sqlalchemy.orm import Session
from app.models.loan_application import LoanApplication
from app.schemas.loan_application import LoanApplicationCreateRequest

def create(db: Session, loan_in: LoanApplicationCreateRequest):
    loan = LoanApplication(
        customer_id=loan_in.customer_id,
        amount=loan_in.amount,
        term_months=loan_in.term_months
    )
    db.add(loan)
    db.commit()
    db.refresh(loan)
    return loan

def get(db: Session, loan_id: int):
    return db.query(LoanApplication).filter(LoanApplication.id == loan_id).first()

def list_all(db: Session, skip: int = 0, limit: int = 10):
    return db.query(LoanApplication).offset(skip).limit(limit).all()
