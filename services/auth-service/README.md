# Auth Service

## Overview
Auth Service handles **user authentication and authorization**. It is responsible for verifying user credentials, issuing JWT tokens, and managing user roles and permissions.  
This service is built with **Python FastAPI** and supports authentication across all microservices in the system.

## Setup
- Built using the provided `Dockerfile`.
- Source code is in the `src/` folder.

## Development
- Define APIs in `docs/api-specs/auth-service.yaml`.
- Run locally via `docker-compose up --build` from the root directory.

## Endpoints
- Base URL: `http://localhost:8001/`
- Refer to `docs/api-specs/auth-service.yaml` for full API details.

## Responsibilities
- User login and token issuance (JWT)
- Role and permission management
- Token validation for internal services
- Supports authentication for:
    - Gateway Service
    - Loan Application Service
    - Customer Service
    - Other internal services
