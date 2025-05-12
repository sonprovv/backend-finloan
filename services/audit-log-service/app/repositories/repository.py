from sqlalchemy.orm import Session
from sqlalchemy import func
from app.models.model import AuditLog, LogType
from app.schemas.schema import AuditLogCreate, LogTypeCreate
from uuid import uuid4
from datetime import datetime
from typing import List, Optional, Dict

class AuditLogRepository:
    def __init__(self, db: Session):
        self.db = db

    def create_audit_log(self, log: AuditLogCreate) -> AuditLog:
        db_log = AuditLog(
            id=str(uuid4()),
            **log.dict(),
            timestamp=datetime.utcnow()
        )
        self.db.add(db_log)
        self.db.commit()
        self.db.refresh(db_log)
        return db_log

    def get_audit_log(self, id: str) -> Optional[AuditLog]:
        return self.db.query(AuditLog).filter(AuditLog.id == id).first()

    def search_audit_logs(self, filters: Dict, page: int, page_size: int) -> tuple[int, List[AuditLog]]:
        query = self.db.query(AuditLog)
        
        for key, value in filters.items():
            if value is not None:
                if key == "start_time":
                    query = query.filter(AuditLog.timestamp >= value)
                elif key == "end_time":
                    query = query.filter(AuditLog.timestamp <= value)
                else:
                    query = query.filter(getattr(AuditLog, key) == value)
        
        total = query.count()
        logs = query.offset((page - 1) * page_size).limit(page_size).all()
        return total, logs

    def get_stats(self, start_time: Optional[str], end_time: Optional[str], group_by: str) -> List[Dict]:
        query = self.db.query(getattr(AuditLog, group_by).label("key"), func.count().label("count"))
        
        if start_time:
            query = query.filter(AuditLog.timestamp >= start_time)
        if end_time:
            query = query.filter(AuditLog.timestamp <= end_time)
            
        query = query.group_by(getattr(AuditLog, group_by))
        return [{"key": row.key, "count": row.count} for row in query.all()]

    def create_log_type(self, log_type: LogTypeCreate) -> LogType:
        db_log_type = LogType(**log_type.dict())
        self.db.add(db_log_type)
        self.db.commit()
        self.db.refresh(db_log_type)
        return db_log_type

    def get_log_types(self) -> List[LogType]:
        return self.db.query(LogType).all()