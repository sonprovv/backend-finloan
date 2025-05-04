# Identity Verification Service

## Overview
The **Identity Verification Service** is responsible for verifying customer identities through electronic Know Your Customer (eKYC) processes. It handles verification of user-provided documents like ID cards, passports, and facial recognition matches against official records.  
This service integrates with external identity verification providers to ensure customers are properly identified before proceeding with loan applications.

The service is built using **Python** with **FastAPI** for efficient API handling.

## Setup
- Built using the provided `Dockerfile`.
- Source code is in the `src/` folder.

## Development
- Define APIs in `docs/api-specs/identity-verification-service.yaml`.
- Run locally via `docker-compose up --build` from the root directory.

## Endpoints
- Base URL: `http://localhost:8008/`
- Refer to `docs/api-specs/identity-verification-service.yaml` for detailed API specifications, including request/response formats.

## Responsibilities
- Validates customer-provided identity documents
- Performs facial recognition matching
- Integrates with external identity verification services 
- Maintains verification history for audit purposes
- Provides verification status for loan application processes
- Ensures regulatory compliance with KYC requirements

## Database Schema
- `identity_verification`: Stores verification attempts, status, and results
- `verification_documents`: Tracks documents submitted for verification
- `verification_history`: Maintains the history of verification attempts for compliance purposes
