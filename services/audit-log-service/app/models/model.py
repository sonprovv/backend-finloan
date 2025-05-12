from sqlalchemy import Column, Integer, String, Enum, DateTime, JSON
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime
import enum

Base = declarative_base()

class EventAction(enum.Enum):
    CREATE = "CREATE"
    READ = "READ"
    UPDATE = "UPDATE"
    DELETE = "DELETE"
    LOGIN = "LOGIN"
    LOGOUT = "LOGOUT"
    ACCESS = "ACCESS"
    ERROR = "ERROR"
    OTHER = "OTHER"

class Severity(enum.Enum):
    INFO = "INFO"
    WARNING = "WARNING"
    ERROR = "ERROR"
    CRITICAL = "CRITICAL"

class AuditLog(Base):
    __tablename__ = "audit_logs"
    
    id = Column(String, primary_key=True)
    service = Column(String, nullable=False)
    event_type = Column(String, nullable=False)
    event_action = Column(Enum(EventAction), nullable=False)
    user_id = Column(Integer)
    resource_type = Column(String)
    resource_id = Column(String)
    description = Column(String, nullable=False)
    details = Column(JSON)
    severity = Column(Enum(Severity), nullable=False)
    ip_address = Column(String)
    timestamp = Column(DateTime, default=datetime.utcnow)

class LogType(Base):
    __tablename__ = "log_types"
    
    id = Column(Integer, primary_key=True)
    name = Column(String, unique=True, nullable=False)
    description = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

class LogSeverity(Base):
    __tablename__ = "log_severities"
    
    id = Column(Integer, primary_key=True)
    name = Column(Enum(Severity), unique=True, nullable=False)
    description = Column(String)