# Risk Assessment Service

## Overview
The **Risk Assessment Service** is responsible for analyzing and assessing the risk associated with customers based on their credit and financial data. This service evaluates customers' risk levels, computes risk scores, and stores associated risk factors for decision-making processes related to loan approvals and other financial services.

The service is built using **Python** with **FastAPI** for efficient API handling.

## Setup
- Built using the provided `Dockerfile`.
- Source code is in the `src/` folder.

## Development
- Define APIs in `docs/api-specs/risk-assessment-service.yaml`.
- Run locally via `docker-compose up --build` from the root directory.

## Endpoints
- Base URL: `http://localhost:8006/`
- Refer to `docs/api-specs/risk-assessment-service.yaml` for detailed API specifications, including request/response formats.

## Responsibilities
- Analyzes financial and credit data to assess risk for customers.
- Calculates risk scores and determines risk levels (e.g., low, medium, high).
- Manages detailed risk factors (e.g., debt-to-income ratio, credit history).
- Provides endpoints for:
  - Creating and managing risk assessments.
  - Adding and retrieving risk factors associated with assessments.

## Database Schema
- `risk_assessment`: Stores data related to the overall risk assessment of a customer, including score and risk level.
- `risk_factor_detail`: Stores specific factors evaluated during the risk assessment (e.g., income, debt, credit score) and their respective weights and values.
