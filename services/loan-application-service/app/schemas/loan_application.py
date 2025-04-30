from datetime import datetime

from pydantic import BaseModel


class LoanApplicationCreateRequest(BaseModel):
    customer_id: int
    amount: float
    term_months: int


class LoanApplicationResponse(BaseModel):
    id: int
    customer_id: int
    amount: float
    status: str
    term_months: int
    created_at: datetime

    class Config:
        from_attributes = True
