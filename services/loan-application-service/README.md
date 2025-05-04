# Loan Application Service

## Overview
The **Loan Application Service** is responsible for managing loan applications within the system. It allows customers to apply for loans, track the status of their applications, and manage the entire loan lifecycle, including approvals and rejections. This service integrates with other systems like credit score, risk assessment, and loan contract services to ensure seamless processing.

The service is built using **Python** with **FastAPI** for efficient API handling.

## Setup
- Built using the provided `Dockerfile`.
- Source code is in the `src/` folder.

## Development
- Define APIs in `docs/api-specs/loan-application-service.yaml`.
- Run locally via `docker-compose up --build` from the root directory.

## Endpoints
- Base URL: `http://localhost:8002/`
- Refer to `docs/api-specs/loan-application-service.yaml` for detailed API specifications, including request/response formats.

## Responsibilities
- Handles the full loan application process: submission, status tracking, approval/rejection, and record management.
- Integrates with:
    - **Credit Score Service**: Fetches and standardizes credit score data.
    - **Risk Assessment Service**: Analyzes financial data for loan risk.
    - **Loan Contract Service**: Creates and manages loan agreements.
- Provides endpoints for:
    - Creating loan applications
    - Retrieving loan application details
    - Updating loan application status
    - Managing loan application history

## Database Schema
- `loan_application`: Stores loan application data (e.g., amount, term, status).
- `application_status_history`: Records the status history for each loan application.