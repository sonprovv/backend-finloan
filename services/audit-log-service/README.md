# Audit Log Service

## Overview
The **Audit Log Service** is responsible for tracking and logging all important events and actions across the entire system. It records user activities, system events, and critical operations to provide a comprehensive audit trail for security monitoring, compliance, and troubleshooting.  
This service ensures that all significant actions are properly documented for regulatory compliance and security analysis.

The service is built using **Python** with **FastAPI** for efficient API handling.

## Setup
- Built using the provided `Dockerfile`.
- Source code is in the `src/` folder.

## Development
- Define APIs in `docs/api-specs/audit-log-service.yaml`.
- Run locally via `docker-compose up --build` from the root directory.

## Endpoints
- Base URL: `http://localhost:8011/`
- Refer to `docs/api-specs/audit-log-service.yaml` for detailed API specifications, including request/response formats.

## Responsibilities
- Records detailed audit logs for all significant system events
- Captures user actions, authentication events, and data changes
- Provides secure storage of immutable log records
- Supports log searching and filtering capabilities
- Ensures logs include relevant metadata (timestamp, user, action, etc.)
- Integrates with:
    - All microservices in the system to capture events
    - Security monitoring tools for alerts
    - Compliance reporting systems

## Database Schema
- `audit_log`: Stores comprehensive log entries with full event details
- `log_type`: Categorizes different types of logged events
- `log_severity`: Classifies the severity/importance of log entries
