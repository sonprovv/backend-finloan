import logging

import httpx
from sqlalchemy.orm import Session

from app.models.credit_score import CreditScoreReport
from app.repositories import credit_score_repository
from app.schemas.credit_score import CustomerData, FinancialData  # Pydantic model for financial data
from datetime import datetime


logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
    handlers=[logging.StreamHandler()]  # Force logs to stdout
)

CUSTOMER_SERVICE_URL = "http://customer-service:8003/api"

def calculate_age(dob: str) -> int:
    # Convert from "DD/MM/YYYY" to a datetime object
    birth_date = datetime.strptime(dob, "%d/%m/%Y")
    today = datetime.today()
    age = today.year - birth_date.year - ((today.month, today.day) < (birth_date.month, birth_date.day))
    return age


# Function to calculate the credit score
def calculate_credit_score(age: int, financial_data: FinancialData) -> int:
    # Example logic for calculating the credit score (simplified)
    score = 700  # Default score
    if age < 25:
        score -= 50  # Young people might have a lower score
    if financial_data['debts'] > 0:
        score -= 100  # Deduct score for overdue debts
    if financial_data['income'] > 10000000:
        score += 50  # Increase score for high income
    return score


# Function to fetch customer data from customer microservice
async def get_customer_data(customer_id: int) -> CustomerData:
    logging.info(f"Fetching customer data for customer ID: {customer_id}")

    async with httpx.AsyncClient() as client:
        response = await client.get(f"{CUSTOMER_SERVICE_URL}/customers/{customer_id}")
        logging.info(f"Response from customer service: {response.status_code}")
        logging.info(response)
        response.raise_for_status()  # Raise an exception if the request fails
        return response.json()


# Function to fetch financial data from financial microservice
async def get_financial_data(customer_id: int) -> FinancialData:
    logging.info(f"Fetching financial data for customer ID: {customer_id}")

    async with httpx.AsyncClient() as client:
        response = await client.get(f"{CUSTOMER_SERVICE_URL}/customers/{customer_id}/financial-profile")
        logging.info(f"Response from financial service: {response.status_code}")
        logging.info(response)
        response.raise_for_status()  # Raise an exception if the request fails
        return response.json()


# Function to calculate and store credit score
async def calculate_and_store_credit_score(db: Session, customer_id: int) -> CreditScoreReport:
    # Fetch data from microservices
    customer_data = await get_customer_data(customer_id)
    financial_data = await get_financial_data(customer_id)

    logging.info(f"Customer data: {customer_data}")
    logging.info(f"Financial data: {financial_data}")

    # Calculate age from date of birth
    age = calculate_age(customer_data['dob'])

    # Calculate credit score based on the fetched data
    credit_score = calculate_credit_score(age, financial_data)

    # Store or update the credit score report
    return credit_score_repository.create_or_update_credit_score_report(db, customer_id, credit_score, "internal")