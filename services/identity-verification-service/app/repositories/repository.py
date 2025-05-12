from sqlalchemy.orm import Session
from typing import List, Optional
from app.models.model import VerificationRequest, VerificationDocument, VerificationHistory
from app.models.model import VerificationType, VerificationStatus, DocumentType

class VerificationRepository:
    def __init__(self, db: Session):
        self.db = db

    def create_verification_request(self, customer_id: int, verification_type: VerificationType, document_ids: List[int]) -> VerificationRequest:
        verification_request = VerificationRequest(
            customer_id=customer_id,
            verification_type=verification_type
        )
        self.db.add(verification_request)
        self.db.commit()
        self.db.refresh(verification_request)
        return verification_request

    def get_verification_request(self, request_id: int) -> Optional[VerificationRequest]:
        return self.db.query(VerificationRequest).filter(VerificationRequest.id == request_id).first()

    def get_verification_requests(self, customer_id: Optional[int] = None, status: Optional[VerificationStatus] = None) -> List[VerificationRequest]:
        query = self.db.query(VerificationRequest)
        if customer_id:
            query = query.filter(VerificationRequest.customer_id == customer_id)
        if status:
            query = query.filter(VerificationRequest.status == status)
        return query.all()

    def update_verification_request(self, request_id: int, status: VerificationStatus, notes: Optional[str] = None) -> Optional[VerificationRequest]:
        verification_request = self.get_verification_request(request_id)
        if verification_request:
            verification_request.status = status
            if notes:
                verification_request.notes = notes
            self.db.commit()
            self.db.refresh(verification_request)
        return verification_request

    def create_verification_document(self, customer_id: int, document_type: DocumentType, file_path: str) -> VerificationDocument:
        document = VerificationDocument(
            customer_id=customer_id,
            document_type=document_type,
            file_path=file_path
        )
        self.db.add(document)
        self.db.commit()
        self.db.refresh(document)
        return document

    def get_verification_document(self, document_id: int) -> Optional[VerificationDocument]:
        return self.db.query(VerificationDocument).filter(VerificationDocument.id == document_id).first()

    def create_verification_history(self, customer_id: int, verification_type: VerificationType, status: VerificationStatus, details: Optional[str] = None) -> VerificationHistory:
        history = VerificationHistory(
            customer_id=customer_id,
            verification_type=verification_type,
            status=status,
            details=details
        )
        self.db.add(history)
        self.db.commit()
        self.db.refresh(history)
        return history

    def get_verification_history(self, customer_id: int) -> List[VerificationHistory]:
        return self.db.query(VerificationHistory).filter(VerificationHistory.customer_id == customer_id).all()