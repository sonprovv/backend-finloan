# Loan Contract Service

## Overview
The **Loan Contract Service** is responsible for creating and managing loan agreements within the system. It handles the lifecycle of loan contracts including creation, updates, retrieval, deletion, and management of associated contract terms.  
This service integrates with the loan application workflow and customer management to ensure formal loan contracts are correctly issued for approved applications.

The service is built using **Python** with **FastAPI** for efficient API handling.

## Setup
- Built using the provided `Dockerfile`.
- Source code is in the `src/` folder.

## Development
- Define APIs in `docs/api-specs/loan-contract-service.yaml`.
- Run locally via `docker-compose up --build` from the root directory.

## Endpoints
- Base URL: `http://localhost:8007/`
- Refer to `docs/api-specs/loan-contract-service.yaml` for detailed API specifications, including request/response formats.

## Responsibilities
- Manages the full lifecycle of loan contracts: creation, updates, retrieval, deletion.
- Handles associated contract terms (e.g., payment schedules, penalties, special clauses).
- Integrates with:
    - **Loan Application Service**: Links approved loan applications to loan contracts.
    - **Customer Service**: Associates contracts with verified customer records.
- Provides endpoints for:
    - Creating and managing loan contracts
    - Adding and retrieving contract terms

## Database Schema
- `loan_contract`: Stores loan contract data including application ID, principal amount, interest rate, signing date, and contract status.
- `contract_term`: Stores key terms for each loan contract (e.g., "Payment Frequency", "Late Payment Penalty").
