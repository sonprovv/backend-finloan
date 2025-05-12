import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import uuid
from datetime import datetime
from typing import Dict, List, Optional
from schemas import NotificationResponse

class NotificationService:
    def __init__(self):
        # Email configuration
        self.smtp_server = "smtp.gmail.com"
        self.smtp_port = 587
        self.smtp_username = "sonpt2304@gmail.com"  # Your Gmail
        self.smtp_password = "fosn icrv cjip vbhc"     # Your app password

    async def send_notification(
        self,
        customer_id: str,
        type: str,
        channel: str,
        title: str,
        content: str,
        metadata: Optional[Dict] = None
    ) -> NotificationResponse:
        try:
            notification_id = str(uuid.uuid4())
            
            if channel == "EMAIL":
                await self._send_email(
                    to_email=customer_id,
                    subject=title,
                    body=content
                )
            
            return NotificationResponse(
                id=notification_id,
                customer_id=customer_id,
                type=type,
                channel=channel,
                title=title,
                content=content,
                metadata=metadata or {},
                status="SENT",
                created_at=datetime.utcnow()
            )
        except Exception as e:
            print(f"Error sending notification: {str(e)}")
            raise Exception(f"Failed to send notification: {str(e)}")

    async def _send_email(self, to_email: str, subject: str, body: str):
        try:
            msg = MIMEMultipart()
            msg['From'] = self.smtp_username
            msg['To'] = to_email
            msg['Subject'] = subject

            msg.attach(MIMEText(body, 'html'))

            with smtplib.SMTP(self.smtp_server, self.smtp_port) as server:
                server.starttls()
                server.login(self.smtp_username, self.smtp_password)
                server.send_message(msg)
                print(f"Email sent successfully to {to_email}")
        except Exception as e:
            print(f"Error sending email: {str(e)}")
            raise Exception(f"Failed to send email: {str(e)}")

    async def get_customer_notifications(self, customer_id: str) -> List[NotificationResponse]:
        # In a real application, this would query a database
        return []

    async def get_notification_status(self, notification_id: str) -> NotificationResponse:
        # In a real application, this would query a database
        raise Exception("Notification not found") 