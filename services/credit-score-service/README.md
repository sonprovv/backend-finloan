# Credit Score Service

## Overview
The **Credit Score Service** is responsible for fetching and managing credit score reports from external credit agencies. It stores credit score data retrieved for each customer and logs all interactions with external credit agencies for auditing and troubleshooting purposes.

The service is built using **Python** with **FastAPI** for efficient API handling.

## Setup
- Built using the provided `Dockerfile`.
- Source code is in the `src/` folder.

## Development
- Define APIs in `docs/api-specs/credit-score-service.yaml`.
- Run locally via `docker-compose up --build` from the root directory.

## Endpoints
- Base URL: `http://localhost:8005/`
- Refer to `docs/api-specs/credit-score-service.yaml` for detailed API specifications, including request/response formats.

## Responsibilities
- Fetch and store credit score reports from external credit agencies.
- Log all requests and responses from external credit agencies.
- Provides endpoints for:
  - Creating credit score reports for customers.
  - Retrieving credit score reports.
  - Updating or deleting credit score reports.
  - Logging interactions with external credit agencies.

## Database Schema
- `credit_score_report`: Stores data related to a customer's credit score, including the score, source (credit agency), and the time it was retrieved.
- `external_credit_agency_log`: Stores logs of each request made to an external credit agency, including the request and response payloads and the timestamp of the request.
