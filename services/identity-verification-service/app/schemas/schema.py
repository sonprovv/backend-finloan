from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
from app.models.model import VerificationType, VerificationStatus, DocumentType

class VerificationRequestBase(BaseModel):
    customer_id: int
    verification_type: VerificationType

class VerificationRequestCreate(VerificationRequestBase):
    document_ids: List[int]

class VerificationRequestUpdate(BaseModel):
    status: VerificationStatus
    notes: Optional[str] = None

class VerificationDocumentCreate(BaseModel):
    customer_id: int
    document_type: DocumentType

class VerificationRequestResponse(VerificationRequestBase):
    id: int
    status: VerificationStatus
    created_at: datetime
    updated_at: datetime
    notes: Optional[str] = None
    verified_by: Optional[str] = None

    class Config:
        orm_mode = True

class VerificationDocumentResponse(BaseModel):
    id: int
    customer_id: int
    document_type: DocumentType
    file_path: str
    uploaded_at: datetime
    verification_status: VerificationStatus

    class Config:
        orm_mode = True

class VerificationHistoryResponse(BaseModel):
    id: int
    customer_id: int
    verification_type: VerificationType
    status: VerificationStatus
    timestamp: datetime
    details: Optional[str] = None

    class Config:
        orm_mode = True

class CustomerVerificationStatus(BaseModel):
    customer_id: int
    status: str
    verified_documents: List[dict]
    verification_expiry: Optional[datetime] = None