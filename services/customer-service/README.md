# Customer Service

## Overview
The **Customer Service** is responsible for managing customer profiles, financial profiles, and credit status within the system. It allows CRUD operations on customer data and keeps track of customers’ financial and credit information. This service serves as the backbone for other services like loan application, credit scoring, and risk assessment by providing essential customer data.

The service is built using **Python** with **FastAPI** for efficient API handling.

## Setup
- Built using the provided `Dockerfile`.
- Source code is in the `src/` folder.

## Development
- Define APIs in `docs/api-specs/customer-service.yaml`.
- Run locally via `docker-compose up --build` from the root directory.

## Endpoints
- Base URL: `http://localhost:8003/`
- Refer to `docs/api-specs/customer-service.yaml` for detailed API specifications, including request/response formats.

## Responsibilities
- Manages customer profile lifecycle: creation, updating, retrieval, and deletion.
- Stores and provides:
    - **Customer Profiles**: Basic customer information (name, email, phone, etc.).
    - **Financial Profiles**: Income, debts, assets, and employment status.
    - **Credit Status**: Credit score and last updated date.
- Provides endpoints for:
    - Creating and retrieving customer profiles
    - Updating and deleting customer profiles
    - Managing financial profiles (create/update/retrieve)
    - Managing credit status (retrieve/update)
- Integrates with:
    - **Loan Application Service**: Supplies customer and financial data.
    - **Credit Score Service**: Updates and fetches credit scores.
    - **Risk Assessment Service**: Provides financial profiles for risk evaluation.

## Database Schema
- `customer`: Stores basic customer details (e.g., name, email, phone, DOB, national ID).
- `financial_profile`: Stores financial information like income, debts, assets, and employment status linked to customers.
- `credit_status`: Stores credit score and its last update timestamp for each customer.
