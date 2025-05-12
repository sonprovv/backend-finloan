# models/credit_score_report.py
from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from app.core.database import Base


class CreditScoreReport(Base):
    __tablename__ = "credit_score_report"

    id = Column(Integer, primary_key=True, autoincrement=True)
    customer_id = Column(Integer, nullable=False)
    score = Column(Integer, nullable=False)
    source = Column(String(50), nullable=False)
    retrieved_at = Column(DateTime, default=datetime.utcnow)

    # Optional: Relationship to Customer model if you need it
    # customer = relationship("Customer", back_populates="credit_score_reports")