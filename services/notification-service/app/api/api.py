from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from datetime import datetime
from . import models, schemas
from .service import NotificationService
from database import get_db

router = APIRouter()

@router.post("/notifications", response_model=schemas.NotificationResponse)
async def create_notification(
    notification: schemas.NotificationCreate,
    db: Session = Depends(get_db)
):
    service = NotificationService(db)
    try:
        return await service.send_notification(
            customer_id=notification.customer_id,
            notification_type=notification.type,
            channel=notification.channel,
            recipient_email=notification.recipient_email,
            recipient_phone=notification.recipient_phone,
            template_data=notification.template_data
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/notifications/disbursement", response_model=schemas.NotificationResponse)
async def send_disbursement_notification(
    notification: schemas.DisbursementNotificationCreate,
    db: Session = Depends(get_db)
):
    service = NotificationService(db)
    try:
        return await service.send_disbursement_notification(
            customer_id=notification.customer_id,
            amount=notification.amount,
            recipient_email=notification.recipient_email,
            recipient_phone=notification.recipient_phone
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/notifications/payment-reminder", response_model=schemas.NotificationResponse)
async def send_payment_reminder(
    notification: schemas.PaymentReminderCreate,
    db: Session = Depends(get_db)
):
    service = NotificationService(db)
    try:
        return await service.send_payment_reminder(
            customer_id=notification.customer_id,
            amount=notification.amount,
            due_date=notification.due_date,
            recipient_email=notification.recipient_email,
            recipient_phone=notification.recipient_phone
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/notifications/loan-completion", response_model=schemas.NotificationResponse)
async def send_loan_completion_notification(
    notification: schemas.LoanCompletionNotificationCreate,
    db: Session = Depends(get_db)
):
    service = NotificationService(db)
    try:
        return await service.send_loan_completion_notification(
            customer_id=notification.customer_id,
            recipient_email=notification.recipient_email,
            recipient_phone=notification.recipient_phone
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/notifications/verification", response_model=schemas.NotificationResponse)
async def send_verification_notification(
    notification: schemas.VerificationNotificationCreate,
    db: Session = Depends(get_db)
):
    service = NotificationService(db)
    try:
        return await service.send_verification_notification(
            customer_id=notification.customer_id,
            status=notification.status,
            recipient_email=notification.recipient_email,
            recipient_phone=notification.recipient_phone
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/notifications/{customer_id}", response_model=List[schemas.NotificationResponse])
async def get_customer_notifications(
    customer_id: str,
    db: Session = Depends(get_db)
):
    notifications = db.query(models.Notification).filter(
        models.Notification.customer_id == customer_id
    ).all()
    return notifications

@router.get("/notifications/{customer_id}/status", response_model=schemas.NotificationStatusResponse)
async def get_notification_status(
    customer_id: str,
    db: Session = Depends(get_db)
):
    notifications = db.query(models.Notification).filter(
        models.Notification.customer_id == customer_id
    ).all()
    
    return {
        "total": len(notifications),
        "sent": len([n for n in notifications if n.status == models.NotificationStatus.SENT]),
        "failed": len([n for n in notifications if n.status == models.NotificationStatus.FAILED]),
        "pending": len([n for n in notifications if n.status == models.NotificationStatus.PENDING])
    } 