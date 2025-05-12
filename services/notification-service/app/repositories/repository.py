from sqlalchemy.orm import Session
from typing import List, Optional
from datetime import datetime
from .models import Notification, NotificationTemplate, NotificationType, NotificationChannel, NotificationStatus

class NotificationRepository:
    def __init__(self, db: Session):
        self.db = db

    def create_notification(self, notification: Notification) -> Notification:
        self.db.add(notification)
        self.db.commit()
        self.db.refresh(notification)
        return notification

    def get_notification_by_id(self, notification_id: int) -> Optional[Notification]:
        return self.db.query(Notification).filter(Notification.id == notification_id).first()

    def get_notifications_by_customer_id(self, customer_id: str) -> List[Notification]:
        return self.db.query(Notification).filter(Notification.customer_id == customer_id).all()

    def update_notification_status(
        self,
        notification_id: int,
        status: NotificationStatus,
        error_message: Optional[str] = None
    ) -> Optional[Notification]:
        notification = self.get_notification_by_id(notification_id)
        if notification:
            notification.status = status
            if error_message:
                notification.error_message = error_message
            if status == NotificationStatus.SENT:
                notification.sent_at = datetime.utcnow()
            self.db.commit()
            self.db.refresh(notification)
        return notification

    def get_notification_stats(self, customer_id: str) -> dict:
        notifications = self.get_notifications_by_customer_id(customer_id)
        return {
            "total": len(notifications),
            "sent": len([n for n in notifications if n.status == NotificationStatus.SENT]),
            "failed": len([n for n in notifications if n.status == NotificationStatus.FAILED]),
            "pending": len([n for n in notifications if n.status == NotificationStatus.PENDING])
        }

    def increment_retry_count(self, notification_id: int) -> Optional[Notification]:
        notification = self.get_notification_by_id(notification_id)
        if notification:
            notification.retry_count += 1
            self.db.commit()
            self.db.refresh(notification)
        return notification

class NotificationTemplateRepository:
    def __init__(self, db: Session):
        self.db = db

    def create_template(self, template: NotificationTemplate) -> NotificationTemplate:
        self.db.add(template)
        self.db.commit()
        self.db.refresh(template)
        return template

    def get_template(
        self,
        notification_type: NotificationType,
        channel: NotificationChannel
    ) -> Optional[NotificationTemplate]:
        return self.db.query(NotificationTemplate).filter(
            NotificationTemplate.type == notification_type,
            NotificationTemplate.channel == channel,
            NotificationTemplate.is_active == True
        ).first()

    def get_template_by_id(self, template_id: int) -> Optional[NotificationTemplate]:
        return self.db.query(NotificationTemplate).filter(NotificationTemplate.id == template_id).first()

    def update_template(self, template_id: int, template_data: dict) -> Optional[NotificationTemplate]:
        template = self.get_template_by_id(template_id)
        if template:
            for key, value in template_data.items():
                setattr(template, key, value)
            self.db.commit()
            self.db.refresh(template)
        return template

    def delete_template(self, template_id: int) -> bool:
        template = self.get_template_by_id(template_id)
        if template:
            self.db.delete(template)
            self.db.commit()
            return True
        return False

    def get_all_templates(self) -> List[NotificationTemplate]:
        return self.db.query(NotificationTemplate).all()

    def get_active_templates(self) -> List[NotificationTemplate]:
        return self.db.query(NotificationTemplate).filter(NotificationTemplate.is_active == True).all()

    def deactivate_template(self, template_id: int) -> Optional[NotificationTemplate]:
        template = self.get_template_by_id(template_id)
        if template:
            template.is_active = False
            self.db.commit()
            self.db.refresh(template)
        return template