from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.customer import CreateCustomerDTO, UpdateCustomerDTO, CreateFinancialProfileDTO, \
    UpdateFinancialProfileDTO, UpdateCreditStatusDTO, CustomerDTO, CreditStatusDTO, FinancialProfileDTO
from app.services import customer_service
from app.core.database import get_db
from ..utils.jwt import extract_user_id_from_jwt

import logging

logging.basicConfig(level=logging.INFO)

router = APIRouter()

# TODO still need to implement real scenario business logic
#  when user create customer (like create the information about that customer, they must create the
#  financial profile too, the credit score should depends on the history of loan of that customer

# Customer Endpoints
@router.get("/customers", response_model=list[CustomerDTO])
async def read_customers(db: Session = Depends(get_db)):
    """
    Fetch all customers.
    """
    return customer_service.get_customers(db)


@router.get("/customers/{customer_id}", response_model=CustomerDTO)
async def read_customer(customer_id: int, db: Session = Depends(get_db)):
    """
    Fetch a single customer by their ID.
    """
    customer = customer_service.get_customer(db, customer_id)
    if not customer:
        raise HTTPException(status_code=404, detail="Customer not found")
    return customer


@router.post("/customers", response_model=CreateCustomerDTO)
async def create_new_customer(
        customer_data: CreateCustomerDTO,
        db: Session = Depends(get_db),
        user_account_id: int = Depends(extract_user_id_from_jwt)
):
    """
    Create a new customer.
    """
    logging.info("hit create customer")
    customer = await customer_service.create_customer(db, customer_data, user_account_id)
    logging.info(f"Customer created: {customer}")
    return customer


@router.put("/customers/{customer_id}", response_model=CreateCustomerDTO)
async def update_existing_customer(
        customer_id: int,
        customer_data: UpdateCustomerDTO,
        db: Session = Depends(get_db),
        user_account_id: int = Depends(extract_user_id_from_jwt)
):
    """
    Update an existing customer.
    """
    customer = customer_service.update_customer(db, customer_id, customer_data)
    if not customer:
        raise HTTPException(status_code=404, detail="Customer not found")
    return customer


@router.delete("/customers/{customer_id}", response_model=CreateCustomerDTO)
async def delete_existing_customer(customer_id: int, db: Session = Depends(get_db)):
    """
    Delete a customer by their ID.
    """
    customer = customer_service.delete_customer(db, customer_id)
    if not customer:
        raise HTTPException(status_code=404, detail="Customer not found")
    return customer


# Financial Profile Endpoints
@router.get("/customers/{customer_id}/financial-profile", response_model=FinancialProfileDTO)
async def read_financial_profile(customer_id: int, db: Session = Depends(get_db)):
    """
    Fetch the financial profile for a specific customer.
    """
    financial_profile = customer_service.get_financial_profile(db, customer_id)
    if not financial_profile:
        raise HTTPException(status_code=404, detail="Financial profile not found")
    return financial_profile


@router.post("/customers/{customer_id}/financial-profile", response_model=CreateFinancialProfileDTO)
async def create_or_update_financial_profile(customer_id: int, financial_data: CreateFinancialProfileDTO,
                                             db: Session = Depends(get_db)):
    """
    Create or update the financial profile for a customer.
    """
    financial_profile = customer_service.create_or_update_financial_profile(db, customer_id, financial_data)
    return financial_profile


@router.put("/customers/{customer_id}/financial-profile", response_model=UpdateFinancialProfileDTO)
async def update_financial_profile(customer_id: int, financial_data: UpdateFinancialProfileDTO,
                                   db: Session = Depends(get_db)):
    """
    Update the financial profile for a specific customer.
    """
    financial_profile = customer_service.update_financial_profile(db, customer_id, financial_data)
    if not financial_profile:
        raise HTTPException(status_code=404, detail="Financial profile not found")
    return financial_profile


# Credit Status Endpoints
@router.get("/customers/{customer_id}/credit-status", response_model=CreditStatusDTO)
async def read_credit_status(customer_id: int, db: Session = Depends(get_db)):
    """
    Fetch the credit status for a specific customer.
    """
    credit_status = customer_service.get_credit_status(db, customer_id)
    if not credit_status:
        raise HTTPException(status_code=404, detail="Credit status not found")
    return credit_status


@router.post("/customers/{customer_id}/credit-status", response_model=CreditStatusDTO)
async def create_or_update_credit_status(customer_id: int, credit_status_data: UpdateCreditStatusDTO,
                                         db: Session = Depends(get_db)):
    """
    Create or update the credit status for a customer.
    """
    credit_status = customer_service.create_or_update_credit_status(db, customer_id, credit_status_data)
    return credit_status