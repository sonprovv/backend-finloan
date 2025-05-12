from sqlalchemy import Column, Integer, String, Date, DateTime, ForeignKey, DECIMAL
from app.core.database import Base
import datetime


class Customer(Base):
    __tablename__ = "customer"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False)
    phone = Column(String(20), nullable=False)
    dob = Column(String(20), nullable=False)
    national_id = Column(String(20), nullable=False)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    user_account_id = Column(Integer, index=True)


class FinancialProfile(Base):
    __tablename__ = "financial_profile"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    customer_id = Column(Integer, ForeignKey("customer.id"), nullable=False)
    income = Column(DECIMAL(12, 2), nullable=False)
    employment_status = Column(String(50), nullable=False)
    debts = Column(DECIMAL(12, 2), nullable=False)
    assets = Column(DECIMAL(12, 2), nullable=False)


class CreditStatus(Base):
    __tablename__ = "credit_status"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    customer_id = Column(Integer, ForeignKey("customer.id"), nullable=False)
    current_score = Column(Integer, nullable=False)
    last_updated = Column(DateTime, default=datetime.datetime.utcnow)