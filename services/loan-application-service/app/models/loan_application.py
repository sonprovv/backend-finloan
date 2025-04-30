from sqlalchemy import Column, Integer, String, Numeric, DateTime
from app.core.database import Base
import datetime

class LoanApplication(Base):
    __tablename__ = "loan_application"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    customer_id = Column(Integer, nullable=False)
    amount = Column(Numeric(12, 2), nullable=False)
    term_months = Column(Integer, nullable=False)
    status = Column(String(50), default="PENDING")
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
