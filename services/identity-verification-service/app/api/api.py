from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Query
from typing import List, Optional, Dict, Any
from sqlalchemy.orm import Session
from app.repositories.repository import VerificationRepository
from app.services.service import VerificationService
from app.schemas.schema import (
    VerificationRequestCreate,
    VerificationRequestUpdate,
    VerificationRequestResponse,
    VerificationDocumentResponse,
    VerificationHistoryResponse,
    CustomerVerificationStatus
)
from app.models.model import VerificationType, VerificationStatus, DocumentType
from app.core.database import get_db

router = APIRouter()

def get_verification_service(db: Session = Depends(get_db)) -> VerificationService:
    repository = VerificationRepository(db)
    return VerificationService(repository)

@router.post("/verifications", response_model=Dict[str, Any])
async def create_verification_request(
    request: VerificationRequestCreate,
    service: VerificationService = Depends(get_verification_service)
):
    return await service.create_verification_request(
        customer_id=request.customer_id,
        verification_type=request.verification_type,
        document_ids=request.document_ids
    )

@router.get("/verifications", response_model=List[VerificationRequestResponse])
def get_verification_requests(
    customer_id: Optional[int] = None,
    status: Optional[VerificationStatus] = None,
    service: VerificationService = Depends(get_verification_service)
):
    return service.get_verification_requests(customer_id, status)

@router.get("/verifications/{id}", response_model=VerificationRequestResponse)
def get_verification_request(
    id: int,
    service: VerificationService = Depends(get_verification_service)
):
    request = service.get_verification_request(id)
    if not request:
        raise HTTPException(status_code=404, detail="Verification request not found")
    return request

@router.put("/verifications/{id}", response_model=VerificationRequestResponse)
def update_verification_request(
    id: int,
    request: VerificationRequestUpdate,
    service: VerificationService = Depends(get_verification_service)
):
    updated_request = service.update_verification_request(id, request.status, request.notes)
    if not updated_request:
        raise HTTPException(status_code=404, detail="Verification request not found")
    return updated_request

@router.post("/verifications/documents", response_model=Dict[str, Any])
async def upload_document(
    customer_id: int = Query(...),
    document_type: DocumentType = Query(...),
    file: UploadFile = File(...),
    service: VerificationService = Depends(get_verification_service)
):
    result = await service.upload_document(customer_id, document_type, file)
    return result

@router.post("/verifications/id-card/verify/{customer_id}", response_model=Dict[str, Any])
async def verify_id_card(
    customer_id: int,
    id_info: Dict[str, Any],
    service: VerificationService = Depends(get_verification_service)
):
    """
    Verify ID card information against official records.
    This endpoint receives the extracted information and performs verification.
    """
    result = await service.verify_extracted_info(customer_id, id_info)
    return result

@router.get("/verifications/customers/{customer_id}/status", response_model=CustomerVerificationStatus)
def get_customer_verification_status(
    customer_id: int,
    service: VerificationService = Depends(get_verification_service)
):
    return service.get_customer_verification_status(customer_id)

@router.get("/verifications/history/{customer_id}", response_model=List[VerificationHistoryResponse])
def get_verification_history(
    customer_id: int,
    service: VerificationService = Depends(get_verification_service)
):
    return service.get_verification_history(customer_id)