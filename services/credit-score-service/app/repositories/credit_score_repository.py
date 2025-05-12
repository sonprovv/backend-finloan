import datetime

from sqlalchemy.orm import Session
from app.models.credit_score import CreditScoreReport


# Create or Update Credit Score Report in the database
def create_or_update_credit_score_report(db: Session, customer_id: int, score: int, source: str) -> CreditScoreReport:
    # Check if the report already exists
    existing_report = db.query(CreditScoreReport).filter(CreditScoreReport.customer_id == customer_id).first()

    if existing_report:
        # If it exists, update the report
        existing_report.score = score
        existing_report.source = source
        existing_report.retrieved_at = datetime.datetime.utcnow()
        db.commit()
        db.refresh(existing_report)
        return existing_report
    else:
        # Otherwise, create a new report
        new_report = CreditScoreReport(
            customer_id=customer_id,
            score=score,
            source=source,
            retrieved_at=datetime.datetime.utcnow()
        )
        db.add(new_report)
        db.commit()
        db.refresh(new_report)
        return new_report