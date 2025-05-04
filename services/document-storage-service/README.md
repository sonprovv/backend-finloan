# Document Storage Service

## Overview
The **Document Storage Service** is responsible for securely storing and retrieving various documents related to the loan process. It handles customer identification documents, loan contracts, payment receipts, and other important files needed throughout the loan lifecycle.  
This service provides a centralized document repository with proper access controls and encryption to ensure data security and compliance.

The service is built using **Python** with **FastAPI** for efficient API handling.

## Setup
- Built using the provided `Dockerfile`.
- Source code is in the `src/` folder.

## Development
- Define APIs in `docs/api-specs/document-storage-service.yaml`.
- Run locally via `docker-compose up --build` from the root directory.

## Endpoints
- Base URL: `http://localhost:8010/`
- Refer to `docs/api-specs/document-storage-service.yaml` for detailed API specifications, including request/response formats.

## Responsibilities
- Securely stores and retrieves customer documents
- Manages document metadata, versions, and categories
- Enforces access control for document security
- Handles document encryption and secure transmission
- Archives and retains documents for regulatory compliance
- Integrates with:
    - **Identity Verification Service**: For ID document storage
    - **Loan Contract Service**: For contract document storage
    - **Customer Service**: For linking documents to customers

## Database Schema
- `document`: Stores document metadata and file references
- `document_access`: Manages access permissions for documents
- `document_version`: Tracks document versions and changes
- `document_category`: Organizes documents by type/purpose
