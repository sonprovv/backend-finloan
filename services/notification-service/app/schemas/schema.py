from pydantic import BaseModel, EmailStr
from typing import Optional, Dict, Any
from datetime import datetime
from .models import NotificationType, NotificationChannel, NotificationStatus

class NotificationBase(BaseModel):
    customer_id: str
    recipient_email: Optional[EmailStr] = None
    recipient_phone: Optional[str] = None

class NotificationCreate(NotificationBase):
    type: NotificationType
    channel: NotificationChannel
    template_data: Optional[Dict[str, Any]] = None

class DisbursementNotificationCreate(NotificationBase):
    amount: float

class PaymentReminderCreate(NotificationBase):
    amount: float
    due_date: datetime

class LoanCompletionNotificationCreate(NotificationBase):
    pass

class VerificationNotificationCreate(NotificationBase):
    status: str

class NotificationResponse(NotificationBase):
    id: int
    type: NotificationType
    channel: NotificationChannel
    status: NotificationStatus
    subject: str
    content: str
    sent_at: Optional[datetime]
    created_at: datetime
    updated_at: datetime
    error_message: Optional[str]

    class Config:
        orm_mode = True

class NotificationStatusResponse(BaseModel):
    total: int
    sent: int
    failed: int
    pending: int

class NotificationTemplateBase(BaseModel):
    type: NotificationType
    channel: NotificationChannel
    subject_template: str
    content_template: str
    is_active: bool = True

class NotificationTemplateCreate(NotificationTemplateBase):
    pass

class NotificationTemplateResponse(NotificationTemplateBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True 