from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Enum, Text
from sqlalchemy.orm import relationship
from datetime import datetime
import enum
from app.core.database import Base

class VerificationType(str, enum.Enum):
    ID_VERIFICATION = "ID_VERIFICATION"
    FACIAL_RECOGNITION = "FACIAL_RECOGNITION"
    ADDRESS_VERIFICATION = "ADDRESS_VERIFICATION"
    DOCUMENT_VERIFICATION = "DOCUMENT_VERIFICATION"

class VerificationStatus(str, enum.Enum):
    PENDING = "PENDING"
    VERIFIED = "VERIFIED"
    REJECTED = "REJECTED"
    EXPIRED = "EXPIRED"

class DocumentType(str, enum.Enum):
    PASSPORT = "PASSPORT"
    ID_CARD = "ID_CARD"
    DRIVING_LICENSE = "DRIVING_LICENSE"
    UTILITY_BILL = "UTILITY_BILL"
    BANK_STATEMENT = "BANK_STATEMENT"

class VerificationRequest(Base):
    __tablename__ = "verification_requests"

    id = Column(Integer, primary_key=True, index=True)
    customer_id = Column(Integer, nullable=False)
    verification_type = Column(Enum(VerificationType), nullable=False)
    status = Column(Enum(VerificationStatus), default=VerificationStatus.PENDING)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    notes = Column(Text, nullable=True)
    verified_by = Column(String(255), nullable=True)

    documents = relationship("VerificationDocument", back_populates="verification_request")

class VerificationDocument(Base):
    __tablename__ = "verification_documents"

    id = Column(Integer, primary_key=True, index=True)
    customer_id = Column(Integer, nullable=False)
    document_type = Column(Enum(DocumentType), nullable=False)
    file_path = Column(String(255), nullable=False)
    uploaded_at = Column(DateTime, default=datetime.utcnow)
    verification_status = Column(Enum(VerificationStatus), default=VerificationStatus.PENDING)
    verification_request_id = Column(Integer, ForeignKey("verification_requests.id"))

    verification_request = relationship("VerificationRequest", back_populates="documents")

class VerificationHistory(Base):
    __tablename__ = "verification_history"

    id = Column(Integer, primary_key=True, index=True)
    customer_id = Column(Integer, nullable=False)
    verification_type = Column(Enum(VerificationType), nullable=False)
    status = Column(Enum(VerificationStatus), nullable=False)
    timestamp = Column(DateTime, default=datetime.utcnow)
    details = Column(Text, nullable=True)