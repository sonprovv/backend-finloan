import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import requests
from typing import Optional, Dict, Any, List
import logging
from sqlalchemy.orm import Session
from .models import Notification, NotificationTemplate, NotificationType, NotificationChannel, NotificationStatus
from .repository import NotificationRepository, NotificationTemplateRepository
from .config import get_settings

logger = logging.getLogger(__name__)

class NotificationService:
    def __init__(self, db: Session):
        self.db = db
        self.notification_repo = NotificationRepository(db)
        self.template_repo = NotificationTemplateRepository(db)
        
        # Load settings from environment variables
        settings = get_settings()
        
        self.email_config = {
            "smtp_server": settings.smtp_server,
            "smtp_port": settings.smtp_port,
            "username": settings.smtp_username,
            "password": settings.smtp_password
        }
        
        self.sms_config = {
            "api_key": settings.sms_api_key,
            "api_url": settings.sms_api_url
        }

    # ... rest of the service code remains the same ... 