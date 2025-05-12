from sqlalchemy.orm import Session
from datetime import datetime

from app.models.customer import Customer
from app.repositories import customer_repository
from app.schemas.customer import CreateCustomerDTO, UpdateCustomerDTO, CreateFinancialProfileDTO, \
    UpdateFinancialProfileDTO, UpdateCreditStatusDTO

from ..utils import service_client


# Customer Service Functions
def get_customers(db: Session):
    """
    Fetch all customers from the database.
    """
    return customer_repository.get_all_customers(db)


def get_customer(db: Session, customer_id: int):
    """
    Fetch a single customer by their ID from the database.
    """
    customer = customer_repository.get_customer_by_id(db, customer_id)
    if not customer:
        return None
    return customer


async def create_customer(db: Session, customer_data: CreateCustomerDTO, user_account_id: int):
    """
    Create a new customer and associate it with a user account from auth-service.
    """
    # Call auth-service to fetch user info and verify if the user exists
    # try:
    #     user_info = await service_client.get_user_info(user_account_id)  # Check if user exists
    # except Exception as e:
    #     return {"error": str(e)}  # Return error if user does not exist

    # Now, we know the user exists, so we can create the customer
    new_customer = Customer(
        name=customer_data.name,
        email=customer_data.email,
        phone=customer_data.phone,
        dob=customer_data.dob,
        national_id=customer_data.national_id,
        created_at=datetime.utcnow(),
        user_account_id=user_account_id  # Link the customer with the valid user_id
    )

    db.add(new_customer)
    db.commit()
    db.refresh(new_customer)
    return new_customer


def update_customer(db: Session, customer_id: int, customer_data: UpdateCustomerDTO):
    """
    Update the customer data in the database.
    """
    customer = customer_repository.get_customer_by_id(db, customer_id)
    if not customer:
        return None

    return customer_repository.update_customer(db, customer_id, customer_data)


def delete_customer(db: Session, customer_id: int):
    """
    Delete a customer from the database.
    """
    customer = customer_repository.get_customer_by_id(db, customer_id)
    if not customer:
        return None

    return customer_repository.delete_customer(db, customer_id)


# Financial Profile Service Functions
def get_financial_profile(db: Session, customer_id: int):
    """
    Fetch the financial profile for a specific customer.
    """
    financial_profile = customer_repository.get_financial_profile(db, customer_id)
    if not financial_profile:
        return None
    return financial_profile


def create_or_update_financial_profile(db: Session, customer_id: int, financial_data: CreateFinancialProfileDTO):
    """
    Create or update a customer's financial profile.
    """
    # First, check if a financial profile already exists
    existing_profile = customer_repository.get_financial_profile(db, customer_id)

    if existing_profile:
        # If it exists, update the financial profile
        return customer_repository.update_financial_profile(db, customer_id, financial_data)
    else:
        # If it doesn't exist, create a new financial profile
        return customer_repository.create_or_update_financial_profile(db, customer_id, financial_data)


def update_financial_profile(db: Session, customer_id: int, financial_data: UpdateFinancialProfileDTO):
    """
    Update an existing customer's financial profile.
    """
    # Fetch the existing financial profile
    existing_profile = customer_repository.get_financial_profile(db, customer_id)

    if not existing_profile:
        return {"error": "Financial profile not found"}

    # If the profile exists, update it using the provided DTO
    return customer_repository.update_financial_profile(db, customer_id, financial_data)


# Credit Status Service Functions
def get_credit_status(db: Session, customer_id: int):
    """
    Fetch the credit status for a specific customer.
    """
    credit_status = customer_repository.get_credit_status(db, customer_id)
    if not credit_status:
        return None
    return credit_status


def create_or_update_credit_status(db: Session, customer_id: int, credit_status_data: UpdateCreditStatusDTO):
    """
    Create or update a customer's credit status.
    """
    credit_status = customer_repository.create_or_update_credit_status(db, customer_id, credit_status_data)
    return credit_status