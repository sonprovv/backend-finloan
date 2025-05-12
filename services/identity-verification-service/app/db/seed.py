import logging
from datetime import datetime, timedelta
import json
from sqlalchemy.orm import Session
from app.models.model import (
    VerificationType, 
    VerificationStatus, 
    DocumentType, 
    VerificationRequest,
    VerificationDocument,
    VerificationHistory
)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def create_sample_data(db: Session):
    """Create sample data for the identity verification service."""
    logger.info("Creating sample data...")
    
    # Skip if data already exists
    if db.query(VerificationRequest).count() > 0:
        logger.info("Sample data already exists. Skipping.")
        return

    # Create sample verification requests
    sample_requests = [
        # Fully verified customer
        VerificationRequest(
            customer_id=1001,
            verification_type=VerificationType.ID_VERIFICATION,
            status=VerificationStatus.VERIFIED,
            created_at=datetime.utcnow() - timedelta(days=10),
            updated_at=datetime.utcnow() - timedelta(days=9),
            notes="Identity verified successfully",
            verified_by="system"
        ),
        VerificationRequest(
            customer_id=1001,
            verification_type=VerificationType.FACIAL_RECOGNITION,
            status=VerificationStatus.VERIFIED,
            created_at=datetime.utcnow() - timedelta(days=10),
            updated_at=datetime.utcnow() - timedelta(days=9),
            notes="Facial recognition matched",
            verified_by="system"
        ),
        
        # Partially verified customer
        VerificationRequest(
            customer_id=1002,
            verification_type=VerificationType.ID_VERIFICATION,
            status=VerificationStatus.VERIFIED,
            created_at=datetime.utcnow() - timedelta(days=7),
            updated_at=datetime.utcnow() - timedelta(days=6),
            notes="Identity verified successfully",
            verified_by="system"
        ),
        VerificationRequest(
            customer_id=1002,
            verification_type=VerificationType.FACIAL_RECOGNITION,
            status=VerificationStatus.PENDING,
            created_at=datetime.utcnow() - timedelta(days=7),
            updated_at=datetime.utcnow() - timedelta(days=7),
            notes=None
        ),
        
        # Pending verification
        VerificationRequest(
            customer_id=1003,
            verification_type=VerificationType.ID_VERIFICATION,
            status=VerificationStatus.PENDING,
            created_at=datetime.utcnow() - timedelta(days=2),
            updated_at=datetime.utcnow() - timedelta(days=2)
        ),
        
        # Rejected verification
        VerificationRequest(
            customer_id=1004,
            verification_type=VerificationType.ID_VERIFICATION,
            status=VerificationStatus.REJECTED,
            created_at=datetime.utcnow() - timedelta(days=5),
            updated_at=datetime.utcnow() - timedelta(days=4),
            notes="Document appears to be altered",
            verified_by="system"
        )
    ]
    
    for req in sample_requests:
        db.add(req)
    
    db.commit()
    
    # Refresh to get IDs
    for req in sample_requests:
        db.refresh(req)
    
    # Create sample documents
    sample_documents = [
        # Customer 1001 documents
        VerificationDocument(
            customer_id=1001,
            document_type=DocumentType.ID_CARD,
            file_path="uploads/1001_ID_CARD_20230501_120000.jpg",
            uploaded_at=datetime.utcnow() - timedelta(days=10),
            verification_status=VerificationStatus.VERIFIED,
            verification_request_id=sample_requests[0].id
        ),
        VerificationDocument(
            customer_id=1001,
            document_type=DocumentType.PASSPORT,
            file_path="uploads/1001_PASSPORT_20230501_120500.jpg",
            uploaded_at=datetime.utcnow() - timedelta(days=10),
            verification_status=VerificationStatus.VERIFIED,
            verification_request_id=sample_requests[0].id
        ),
        
        # Customer 1002 documents
        VerificationDocument(
            customer_id=1002,
            document_type=DocumentType.ID_CARD,
            file_path="uploads/1002_ID_CARD_20230510_133000.jpg",
            uploaded_at=datetime.utcnow() - timedelta(days=7),
            verification_status=VerificationStatus.VERIFIED,
            verification_request_id=sample_requests[2].id
        ),
        
        # Customer 1003 documents
        VerificationDocument(
            customer_id=1003,
            document_type=DocumentType.ID_CARD,
            file_path="uploads/1003_ID_CARD_20230515_143000.jpg",
            uploaded_at=datetime.utcnow() - timedelta(days=2),
            verification_status=VerificationStatus.PENDING,
            verification_request_id=sample_requests[4].id
        ),
        
        # Customer 1004 documents
        VerificationDocument(
            customer_id=1004,
            document_type=DocumentType.ID_CARD,
            file_path="uploads/1004_ID_CARD_20230512_110000.jpg",
            uploaded_at=datetime.utcnow() - timedelta(days=5),
            verification_status=VerificationStatus.REJECTED,
            verification_request_id=sample_requests[5].id
        )
    ]
    
    for doc in sample_documents:
        db.add(doc)
    
    db.commit()
    
    # Create sample verification history
    sample_history = [
        # Customer 1001 history
        VerificationHistory(
            customer_id=1001,
            verification_type=VerificationType.ID_VERIFICATION,
            status=VerificationStatus.PENDING,
            timestamp=datetime.utcnow() - timedelta(days=10, hours=1),
            details="Document uploaded for verification"
        ),
        VerificationHistory(
            customer_id=1001,
            verification_type=VerificationType.ID_VERIFICATION,
            status=VerificationStatus.VERIFIED,
            timestamp=datetime.utcnow() - timedelta(days=9),
            details=json.dumps({
                "verified": True,
                "confidence_score": 0.98,
                "matched_fields": ["full_name", "id_number", "date_of_birth", "address"],
                "verification_method": "database_lookup"
            })
        ),
        VerificationHistory(
            customer_id=1001,
            verification_type=VerificationType.FACIAL_RECOGNITION,
            status=VerificationStatus.VERIFIED,
            timestamp=datetime.utcnow() - timedelta(days=9),
            details=json.dumps({
                "verified": True,
                "confidence_score": 0.95,
                "verification_method": "biometric_matching"
            })
        ),
        
        # Customer 1002 history
        VerificationHistory(
            customer_id=1002,
            verification_type=VerificationType.ID_VERIFICATION,
            status=VerificationStatus.PENDING,
            timestamp=datetime.utcnow() - timedelta(days=7, hours=1),
            details="Document uploaded for verification"
        ),
        VerificationHistory(
            customer_id=1002,
            verification_type=VerificationType.ID_VERIFICATION,
            status=VerificationStatus.VERIFIED,
            timestamp=datetime.utcnow() - timedelta(days=6),
            details=json.dumps({
                "verified": True,
                "confidence_score": 0.92,
                "matched_fields": ["full_name", "id_number", "date_of_birth"],
                "verification_method": "database_lookup"
            })
        ),
        
        # Customer 1003 history
        VerificationHistory(
            customer_id=1003,
            verification_type=VerificationType.ID_VERIFICATION,
            status=VerificationStatus.PENDING,
            timestamp=datetime.utcnow() - timedelta(days=2),
            details="Document uploaded for verification"
        ),
        
        # Customer 1004 history
        VerificationHistory(
            customer_id=1004,
            verification_type=VerificationType.ID_VERIFICATION,
            status=VerificationStatus.PENDING,
            timestamp=datetime.utcnow() - timedelta(days=5, hours=1),
            details="Document uploaded for verification"
        ),
        VerificationHistory(
            customer_id=1004,
            verification_type=VerificationType.ID_VERIFICATION,
            status=VerificationStatus.REJECTED,
            timestamp=datetime.utcnow() - timedelta(days=4),
            details="Document appears to be altered"
        )
    ]
    
    for history in sample_history:
        db.add(history)
    
    db.commit()
    
    logger.info(f"Created {len(sample_requests)} verification requests")
    logger.info(f"Created {len(sample_documents)} verification documents")
    logger.info(f"Created {len(sample_history)} verification history entries")
    logger.info("Sample data creation completed!") 