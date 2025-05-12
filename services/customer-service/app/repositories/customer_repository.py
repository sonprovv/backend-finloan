from datetime import datetime

from sqlalchemy.orm import Session
from sqlalchemy.exc import NoResultFound
from app.models.customer import Customer, FinancialProfile, CreditStatus
from app.schemas.customer import CreateCustomerDTO, UpdateCustomerDTO, CreateFinancialProfileDTO, \
    UpdateFinancialProfileDTO, UpdateCreditStatusDTO


# Customer Repository Functions
def get_all_customers(db: Session):
    return db.query(Customer).all()


def get_customer_by_id(db: Session, customer_id: int):
    return db.query(Customer).filter(Customer.id == customer_id).first()


def create_customer(db: Session, customer_data: CreateCustomerDTO):
    new_customer = Customer(
        name=customer_data.name,
        email=customer_data.email,
        phone=customer_data.phone,
        dob=customer_data.dob,
        national_id=customer_data.national_id,
        created_at=customer_data.created_at
    )
    db.add(new_customer)
    db.commit()
    db.refresh(new_customer)
    return new_customer


def update_customer(db: Session, customer_id: int, customer_data: UpdateCustomerDTO):
    customer = get_customer_by_id(db, customer_id)
    if not customer:
        return None
    customer.name = customer_data.name
    customer.email = customer_data.email
    customer.phone = customer_data.phone
    customer.dob = customer_data.dob
    customer.national_id = customer_data.national_id
    customer.created_at = customer_data.created_at
    db.commit()
    db.refresh(customer)
    return customer


def delete_customer(db: Session, customer_id: int):
    customer = get_customer_by_id(db, customer_id)
    if not customer:
        return None
    db.delete(customer)
    db.commit()
    return customer


# Financial Profile Repository Functions
def get_financial_profile(db: Session, customer_id: int):
    return db.query(FinancialProfile).filter(FinancialProfile.customer_id == customer_id).first()


def create_or_update_financial_profile(db: Session, customer_id: int, financial_data: CreateFinancialProfileDTO):
    """
    Creates or updates a financial profile for a customer.
    """
    financial_profile = get_financial_profile(db, customer_id)
    if not financial_profile:
        # Create a new financial profile if none exists
        new_profile = FinancialProfile(
            customer_id=customer_id,
            income=financial_data.income,
            employment_status=financial_data.employment_status,
            debts=financial_data.debts,
            assets=financial_data.assets
        )
        db.add(new_profile)
        db.commit()
        db.refresh(new_profile)
        return new_profile
    else:
        # Update the existing financial profile
        financial_profile.income = financial_data.income
        financial_profile.employment_status = financial_data.employment_status
        financial_profile.debts = financial_data.debts
        financial_profile.assets = financial_data.assets
        db.commit()
        db.refresh(financial_profile)
        return financial_profile


def update_financial_profile(db: Session, customer_id: int, financial_data: UpdateFinancialProfileDTO):
    """
    Updates an existing financial profile for a customer.
    """
    financial_profile = get_financial_profile(db, customer_id)
    if not financial_profile:
        return None  # Financial profile not found for the given customer
    financial_profile.income = financial_data.income
    financial_profile.employment_status = financial_data.employment_status
    financial_profile.debts = financial_data.debts
    financial_profile.assets = financial_data.assets
    db.commit()
    db.refresh(financial_profile)
    return financial_profile


# Credit Status Repository Functions
def get_credit_status(db: Session, customer_id: int):
    return db.query(CreditStatus).filter(CreditStatus.customer_id == customer_id).first()


def create_or_update_credit_status(db: Session, customer_id: int, credit_status_data: UpdateCreditStatusDTO):
    """
    Creates or updates a customer's credit status.
    """
    credit_status = get_credit_status(db, customer_id)
    if not credit_status:
        # Create a new credit status if none exists
        new_status = CreditStatus(
            customer_id=customer_id,
            current_score=credit_status_data.current_score,
            last_updated=datetime.utcnow()
        )
        db.add(new_status)
        db.commit()
        db.refresh(new_status)
        return new_status
    else:
        # Update the existing credit status
        credit_status.current_score = credit_status_data.current_score
        credit_status.last_updated = credit_status_data.last_updated
        db.commit()
        db.refresh(credit_status)
        return credit_status