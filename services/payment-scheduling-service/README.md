# Payment Scheduling Service

## Overview
The **Payment Scheduling Service** is responsible for creating and managing payment schedules for loan contracts. It handles generation of payment plans, tracking of payment status, and coordination with payment processors to ensure timely loan repayments.  
This service works closely with loan contracts to provide customers with clear repayment schedules and maintain accurate payment records.

The service is built using **Python** with **FastAPI** for efficient API handling.

## Setup
- Built using the provided `Dockerfile`.
- Source code is in the `src/` folder.

## Development
- Define APIs in `docs/api-specs/payment-scheduling-service.yaml`.
- Run locally via `docker-compose up --build` from the root directory.

## Endpoints
- Base URL: `http://localhost:8004/`
- Refer to `docs/api-specs/payment-scheduling-service.yaml` for detailed API specifications, including request/response formats.

## Responsibilities
- Creates payment schedules based on loan contract terms
- Tracks payment status (scheduled, pending, completed, overdue)
- Calculates payment amounts including principal, interest, and fees
- Manages payment due dates and sends reminders
- Processes payment history and maintains payment records
- Integrates with:
    - **Loan Contract Service**: To obtain contract terms
    - **Notification Service**: To send payment reminders
    - External payment processors

## Database Schema
- `payment_schedule`: Stores payment schedules for each loan contract
- `payment`: Tracks individual payments, status, and amounts
- `payment_history`: Maintains a history of all payment transactions