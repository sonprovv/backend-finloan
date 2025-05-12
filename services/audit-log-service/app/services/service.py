from sqlalchemy.orm import Session
from app.repositories.repository import AuditLogRepository
from app.schemas.schema import AuditLogCreate, AuditLogResponse, LogTypeCreate, LogTypeResponse
from typing import List, Optional, Dict
from datetime import datetime

class AuditLogService:
    def __init__(self, db: Session):
        self.repository = AuditLogRepository(db)

    def create_audit_log(self, log: AuditLogCreate) -> AuditLogResponse:
        return self.repository.create_audit_log(log)

    def get_audit_log(self, id: str) -> Optional[AuditLogResponse]:
        return self.repository.get_audit_log(id)

    def search_audit_logs(self, 
                         service: Optional[str] = None,
                         event_type: Optional[str] = None,
                         event_action: Optional[str] = None,
                         user_id: Optional[int] = None,
                         resource_type: Optional[str] = None,
                         resource_id: Optional[str] = None,
                         severity: Optional[str] = None,
                         start_time: Optional[str] = None,
                         end_time: Optional[str] = None,
                         page: int = 1,
                         page_size: int = 50
                         ) -> Dict:
        filters = {
            "service": service,
            "event_type": event_type,
            "event_action": event_action,
            "user_id": user_id,
            "resource_type": resource_type,
            "resource_id": resource_id,
            "severity": severity,
            "start_time": start_time,
            "end_time": end_time
        }
        total, logs = self.repository.search_audit_logs(filters, page, page_size)
        return {
            "total": total,
            "page": page,
            "page_size": page_size,
            "logs": logs
        }

    def get_user_audit_logs(self, user_id: int, start_time: Optional[str], 
                          end_time: Optional[str], page: int, page_size: int) -> Dict:
        filters = {"user_id": user_id, "start_time": start_time, "end_time": end_time}
        total, logs = self.repository.search_audit_logs(filters, page, page_size)
        return {
            "total": total,
            "page": page,
            "page_size": page_size,
            "logs": logs
        }

    def get_resource_audit_logs(self, resource_type: str, resource_id: str,
                              start_time: Optional[str], end_time: Optional[str],
                              page: int, page_size: int) -> Dict:
        filters = {
            "resource_type": resource_type,
            "resource_id": resource_id,
            "start_time": start_time,
            "end_time": end_time
        }
        total, logs = self.repository.search_audit_logs(filters, page, page_size)
        return {
            "total": total,
            "page": page,
            "page_size": page_size,
            "logs": logs
        }

    def get_service_audit_logs(self, service_name: str, start_time: Optional[str],
                             end_time: Optional[str], severity: Optional[str],
                             page: int, page_size: int) -> Dict:
        filters = {
            "service": service_name,
            "start_time": start_time,
            "end_time": end_time,
            "severity": severity
        }
        total, logs = self.repository.search_audit_logs(filters, page, page_size)
        return {
            "total": total,
            "page": page,
            "page_size": page_size,
            "logs": logs
        }

    def get_audit_log_stats(self, start_time: Optional[str], end_time: Optional[str],
                           group_by: str) -> Dict:
        stats = self.repository.get_stats(start_time, end_time, group_by)
        return {
            "start_time": start_time,
            "end_time": end_time,
            "group_by": group_by,
            "stats": stats
        }

    def create_log_type(self, log_type: LogTypeCreate) -> LogTypeResponse:
        return self.repository.create_log_type(log_type)

    def get_log_types(self) -> List[LogTypeResponse]:
        return self.repository.get_log_types()