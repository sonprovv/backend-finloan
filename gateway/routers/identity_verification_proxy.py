from fastapi import APIRouter, Request, HTTPException
import httpx
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

router = APIRouter()

IDENTITY_VERIFICATION_SERVICE_URL = "http://identity-verification-service:8008/api"


async def forward_request(request: Request, path: str, method: str = "GET"):
    logger.info(f"Forwarding request to {IDENTITY_VERIFICATION_SERVICE_URL}{path} with method {method}")

    headers = {
        key: value
        for key, value in request.headers.items()
        if value is not None and key.lower() != "host"
    }

    async with httpx.AsyncClient() as client:
        if method in ["POST", "PUT", "PATCH"]:
            # Check if this is a multipart form request (file upload)
            content_type = request.headers.get("content-type", "")
            if "multipart/form-data" in content_type:
                # Handle file upload specially
                form_data = await request.form()
                files = {}
                data = {}
                
                for field_name, field_value in form_data.items():
                    if hasattr(field_value, "filename") and field_value.filename:
                        # This is a file field
                        file_content = await field_value.read()
                        files[field_name] = (field_value.filename, file_content, field_value.content_type)
                    else:
                        # This is a regular form field
                        data[field_name] = field_value
                
                response = await client.request(
                    method, f"{IDENTITY_VERIFICATION_SERVICE_URL}{path}",
                    headers={k: v for k, v in headers.items() if k.lower() != "content-type"},
                    files=files,
                    data=data,
                    params=dict(request.query_params)
                )
            else:
                # Regular JSON request
                body = await request.body()
                response = await client.request(
                    method, f"{IDENTITY_VERIFICATION_SERVICE_URL}{path}",
                    headers=headers,
                    content=body,
                    params=dict(request.query_params)
                )
        else:  # GET, DELETE
            response = await client.request(
                method, f"{IDENTITY_VERIFICATION_SERVICE_URL}{path}",
                headers=headers,
                params=dict(request.query_params)
            )

    if response.status_code >= 400:
        # Try to parse error as JSON, fall back to text if not possible
        try:
            detail = response.json()
        except:
            detail = response.text
        raise HTTPException(status_code=response.status_code, detail=detail)

    # Try to parse response as JSON, return raw text if not possible
    try:
        return response.json()
    except:
        return response.text


# Verification Request Endpoints
@router.post("/verifications/verifications")
async def create_verification_request(request: Request):
    return await forward_request(request, "/verifications/verifications", "POST")

@router.get("/verifications/verifications")
async def get_verification_requests(request: Request):
    return await forward_request(request, "/verifications/verifications", "GET")

@router.get("/verifications/verifications/{id}")
async def get_verification_request(request: Request, id: int):
    return await forward_request(request, f"/verifications/verifications/{id}", "GET")

@router.put("/verifications/verifications/{id}")
async def update_verification_request(request: Request, id: int):
    return await forward_request(request, f"/verifications/verifications/{id}", "PUT")

# Document Upload Endpoint
@router.post("/verifications/verifications/documents")
async def upload_document(request: Request):
    return await forward_request(request, "/verifications/verifications/documents", "POST")

# ID Card Verification Endpoint
@router.post("/verifications/verifications/id-card/verify/{customer_id}")
async def verify_id_card(request: Request, customer_id: int):
    return await forward_request(request, f"/verifications/verifications/id-card/verify/{customer_id}", "POST")

# Customer Status Endpoint
@router.get("/verifications/verifications/customers/{customer_id}/status")
async def get_customer_verification_status(request: Request, customer_id: int):
    return await forward_request(request, f"/verifications/verifications/customers/{customer_id}/status", "GET")

# Verification History Endpoint
@router.get("/verifications/verifications/history/{customer_id}")
async def get_verification_history(request: Request, customer_id: int):
    return await forward_request(request, f"/verifications/verifications/history/{customer_id}", "GET") 