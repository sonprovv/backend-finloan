# Notification Service

## Overview
The **Notification Service** is responsible for sending communications to customers through various channels including email, SMS, and push notifications. It handles template-based message generation, delivery, tracking, and notification preferences.  
This service ensures that customers receive timely information about their loan applications, payment reminders, and other relevant updates.

The service is built using **Python** with **FastAPI** for efficient API handling.

## Setup
- Built using the provided `Dockerfile`.
- Source code is in the `src/` folder.

## Development
- Define APIs in `docs/api-specs/notification-service.yaml`.
- Run locally via `docker-compose up --build` from the root directory.

## Endpoints
- Base URL: `http://localhost:8009/`
- Refer to `docs/api-specs/notification-service.yaml` for detailed API specifications, including request/response formats.

## Responsibilities
- Sends notifications through multiple channels (email, SMS, push)
- Manages notification templates for various events
- Tracks delivery status and notification history
- Handles customer notification preferences and opt-outs
- Provides scheduled notification capabilities for reminders
- Integrates with:
    - **Payment Scheduling Service**: For payment reminders
    - **Loan Application Service**: For status updates
    - External email and SMS gateways

## Database Schema
- `notification`: Stores notification records including content and status
- `notification_template`: Manages templates for different notification types
- `customer_preference`: Tracks customer notification preferences
- `notification_history`: Maintains a history of all sent notifications
