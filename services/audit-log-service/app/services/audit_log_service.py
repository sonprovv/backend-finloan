from datetime import datetime
import uuid
from app.schemas.audit_log import AuditLogCreate, AuditLogResponse
from app.repositories.audit_log_repository import AuditLogRepository

class AuditLogService:
    def __init__(self):
        self.repository = AuditLogRepository()

    async def create_audit_log(self, audit_log: AuditLogCreate) -> AuditLogResponse:
        audit_log_dict = audit_log.model_dump()
        audit_log_dict["id"] = str(uuid.uuid4())
        audit_log_dict["timestamp"] = datetime.utcnow()
        
        created_log = await self.repository.create(audit_log_dict)
        return AuditLogResponse(**created_log)

    async def get_audit_logs(self) -> list[AuditLogResponse]:
        logs = await self.repository.get_all()
        return [AuditLogResponse(**log) for log in logs]

    async def get_audit_log(self, audit_log_id: str) -> AuditLogResponse:
        log = await self.repository.get_by_id(audit_log_id)
        if log:
            return AuditLogResponse(**log)
        return None 