from fastapi import APIRouter, Depends, HTTPException, Query
from typing import List, Optional
from app.schemas.schema import AuditLogCreate, AuditLogResponse, LogTypeCreate, LogTypeResponse
from app.services.service import AuditLogService
from app.models.model import AuditLog, LogType
from sqlalchemy.orm import Session
from app.dependencies import get_db

router = APIRouter()

@router.post("/logs", response_model=AuditLogResponse, status_code=201)
async def create_audit_log(log: AuditLogCreate, db: Session = Depends(get_db)):
    service = AuditLogService(db)
    return service.create_audit_log(log)

@router.get("/logs", response_model=dict)
async def search_audit_logs(
    service: Optional[str] = None,
    event_type: Optional[str] = None,
    event_action: Optional[str] = None,
    user_id: Optional[int] = None,
    resource_type: Optional[str] = None,
    resource_id: Optional[str] = None,
    severity: Optional[str] = None,
    start_time: Optional[str] = None,
    end_time: Optional[str] = None,
    page: int = Query(1, ge=1),
    page_size: int = Query(50, ge=1, le=100),
    db: Session = Depends(get_db)
):
    service = AuditLogService(db)
    return service.search_audit_logs(
        service=service, event_type=event_type, event_action=event_action,
        user_id=user_id, resource_type=resource_type, resource_id=resource_id,
        severity=severity, start_time=start_time, end_time=end_time,
        page=page, page_size=page_size
    )

@router.get("/logs/{id}", response_model=AuditLogResponse)
async def get_audit_log(id: str, db: Session = Depends(get_db)):
    service = AuditLogService(db)
    log = service.get_audit_log(id)
    if not log:
        raise HTTPException(status_code=404, detail="Audit log not found")
    return log

@router.get("/logs/user/{user_id}", response_model=dict)
async def get_user_audit_logs(
    user_id: int,
    start_time: Optional[str] = None,
    end_time: Optional[str] = None,
    page: int = Query(1, ge=1),
    page_size: int = Query(50, ge=1),
    db: Session = Depends(get_db)
):
    service = AuditLogService(db)
    return service.get_user_audit_logs(user_id, start_time, end_time, page, page_size)

@router.get("/logs/resource/{resource_type}/{resource_id}", response_model=dict)
async def get_resource_audit_logs(
    resource_type: str,
    resource_id: str,
    start_time: Optional[str] = None,
    end_time: Optional[str] = None,
    page: int = Query(1, ge=1),
    page_size: int = Query(50, ge=1),
    db: Session = Depends(get_db)
):
    service = AuditLogService(db)
    return service.get_resource_audit_logs(resource_type, resource_id, start_time, end_time, page, page_size)

@router.get("/logs/service/{service_name}", response_model=dict)
async def get_service_audit_logs(
    service_name: str,
    start_time: Optional[str] = None,
    end_time: Optional[str] = None,
    severity: Optional[str] = None,
    page: int = Query(1, ge=1),
    page_size: int = Query(50, ge=1),
    db: Session = Depends(get_db)
):
    service = AuditLogService(db)
    return service.get_service_audit_logs(service_name, start_time, end_time, severity, page, page_size)

@router.get("/logs/stats", response_model=dict)
async def get_audit_log_stats(
    start_time: Optional[str] = None,
    end_time: Optional[str] = None,
    group_by: str = Query(..., regex="^(service|event_type|event_action|resource_type|severity)$"),
    db: Session = Depends(get_db)
):
    service = AuditLogService(db)
    return service.get_audit_log_stats(start_time, end_time, group_by)

@router.get("/log-types", response_model=List[LogTypeResponse])
async def get_log_types(db: Session = Depends(get_db)):
    service = AuditLogService(db)
    return service.get_log_types()

@router.post("/log-types", response_model=LogTypeResponse, status_code=201)
async def create_log_type(log_type: LogTypeCreate, db: Session = Depends(get_db)):
    service = AuditLogService(db)
    return service.create_log_type(log_type)