from pydantic import BaseModel
from datetime import datetime


class CustomerData(BaseModel):
    id: int
    name: str
    email: str
    phone: str
    dob: str  # "DD/MM/YYYY" format for date of birth
    national_id: str
    created_at: datetime  # Assuming the created_at is in ISO 8601 format (YYYY-MM-DDTHH:MM:SS)

    class Config:
        orm_mode = True


class FinancialData(BaseModel):
    id: int
    customer_id: int
    income: float
    employment_status: str  # e.g., 'unemployed', 'employed'
    debts: float  # Total debts the customer has
    assets: float  # Total assets the customer has

    class Config:
        orm_mode = True


class CreditScoreReportResponse(BaseModel):
    id: int
    customer_id: int
    score: int
    source: str  # Could be "internal", "CIC", or any other source
    retrieved_at: datetime

    class Config:
        orm_mode = True