from pydantic import BaseModel
from typing import Dict, Optional
from datetime import datetime

class NotificationCreate(BaseModel):
    customer_id: str
    type: str
    channel: str
    title: str
    content: str
    metadata: Optional[Dict] = None

class NotificationResponse(BaseModel):
    id: str
    customer_id: str
    type: str
    channel: str
    title: str
    content: str
    metadata: Dict
    status: str
    created_at: datetime 