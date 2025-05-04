# Gateway Service

## Overview
The **Gateway Service** acts as the entry point to route incoming HTTP requests to the appropriate backend microservices.  
It handles request forwarding, basic routing, and can be extended to perform authentication and rate limiting.  
This service is built with **Python FastAPI**.

## Setup
- Built using the provided `Dockerfile`.
- Source code is located in the `src/` folder.

## Development
- Define the routing rules and service URLs in the `services` dictionary inside `src/main.py`.
- Run locally via:
  ```bash
  docker-compose up --build

## Endpoints
- Base URL: `http://localhost:8000/`
- Refer to `docs/api-specs/auth-service.yaml` for full API details.
