from pydantic import BaseModel
from datetime import date, datetime


# Customer DTO
class CustomerDTO(BaseModel):
    id: int
    name: str
    email: str
    phone: str
    dob: str
    national_id: str
    created_at: datetime

    class Config:
        orm_mode = True


# FinancialProfile DTO
class FinancialProfileDTO(BaseModel):
    id: int
    customer_id: int
    income: float
    employment_status: str
    debts: float
    assets: float

    class Config:
        orm_mode = True


# CreditStatus DTO
class CreditStatusDTO(BaseModel):
    id: int
    customer_id: int
    current_score: int
    last_updated: datetime

    class Config:
        orm_mode = True


# CreateCustomer DTO (for customer creation)
class CreateCustomerDTO(BaseModel):
    name: str
    email: str
    phone: str
    dob: str
    national_id: str
    # created_at: datetime

    class Config:
        orm_mode = True

# UpdateCustomer DTO (for customer update)
class UpdateCustomerDTO(BaseModel):
    name: str
    email: str
    phone: str
    dob: str
    national_id: str
    # created_at: datetime

    class Config:
        orm_mode = True


# CreateFinancialProfile DTO (for financial profile creation or update)
class CreateFinancialProfileDTO(BaseModel):
    income: float
    employment_status: str
    debts: float
    assets: float

    class Config:
        orm_mode = True


# UpdateFinancialProfile DTO (for updating financial profile)
class UpdateFinancialProfileDTO(BaseModel):
    income: float
    employment_status: str
    debts: float
    assets: float

    class Config:
        orm_mode = True


# UpdateCreditStatus DTO (for updating credit status)
class UpdateCreditStatusDTO(BaseModel):
    current_score: int

    class Config:
        orm_mode = True