from sqlalchemy import Column, Integer, String, DateTime, Enum, ForeignKey, Text, Boolean
from sqlalchemy.orm import relationship
from datetime import datetime
import enum
from database import Base

class NotificationType(enum.Enum):
    DISBURSEMENT = "disbursement"
    PAYMENT_REMINDER = "payment_reminder"
    LOAN_COMPLETION = "loan_completion"
    VERIFICATION = "verification"
    GENERAL = "general"

class NotificationChannel(enum.Enum):
    EMAIL = "email"
    SMS = "sms"
    BOTH = "both"

class NotificationStatus(enum.Enum):
    PENDING = "pending"
    SENT = "sent"
    FAILED = "failed"

class Notification(Base):
    __tablename__ = "notifications"

    id = Column(Integer, primary_key=True, index=True)
    customer_id = Column(String(50), index=True)
    type = Column(Enum(NotificationType))
    channel = Column(Enum(NotificationChannel))
    status = Column(Enum(NotificationStatus), default=NotificationStatus.PENDING)
    subject = Column(String(255))
    content = Column(Text)
    recipient_email = Column(String(255))
    recipient_phone = Column(String(20))
    sent_at = Column(DateTime, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    error_message = Column(Text, nullable=True)
    retry_count = Column(Integer, default=0)
    max_retries = Column(Integer, default=3)

class NotificationTemplate(Base):
    __tablename__ = "notification_templates"

    id = Column(Integer, primary_key=True, index=True)
    type = Column(Enum(NotificationType))
    channel = Column(Enum(NotificationChannel))
    subject_template = Column(String(255))
    content_template = Column(Text)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow) 