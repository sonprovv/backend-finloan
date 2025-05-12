from pydantic import BaseModel, IPvAnyAddress
from typing import Optional, Dict, Any, List
from datetime import datetime
from enum import Enum

class EventAction(str, Enum):
    CREATE = "CREATE"
    READ = "READ"
    UPDATE = "UPDATE"
    DELETE = "DELETE"
    LOGIN = "LOGIN"
    LOGOUT = "LOGOUT"
    ACCESS = "ACCESS"
    ERROR = "ERROR"
    OTHER = "OTHER"

class Severity(str, Enum):
    INFO = "INFO"
    WARNING = "WARNING"
    ERROR = "ERROR"
    CRITICAL = "CRITICAL"

class AuditLogCreate(BaseModel):
    service: str
    event_type: str
    event_action: EventAction
    user_id: Optional[int] = None
    resource_type: Optional[str] = None
    resource_id: Optional[str] = None
    description: str
    details: Optional[Dict[str, Any]] = None
    severity: Severity
    ip_address: Optional[IPvAnyAddress] = None

class AuditLogResponse(AuditLogCreate):
    id: str
    timestamp: datetime

    class Config:
        orm_mode = True

class LogTypeCreate(BaseModel):
    name: str
    description: str

class LogTypeResponse(LogTypeCreate):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True

class LogSeverity(BaseModel):
    id: int
    name: Severity
    description: Optional[str]