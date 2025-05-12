from fastapi import APIRouter, HTTPException, status
from typing import List
from service import NotificationService
from schemas import NotificationCreate, NotificationResponse

router = APIRouter(prefix="/api/notifications", tags=["notifications"])
notification_service = NotificationService()

@router.post("", response_model=NotificationResponse, status_code=status.HTTP_201_CREATED)
async def create_notification(notification: NotificationCreate):
    try:
        result = await notification_service.send_notification(
            customer_id=notification.customer_id,
            type=notification.type,
            channel=notification.channel,
            title=notification.title,
            content=notification.content,
            metadata=notification.metadata
        )
        return result
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )

@router.get("/customer/{customer_id}", response_model=List[NotificationResponse])
async def get_customer_notifications(customer_id: str):
    try:
        return await notification_service.get_customer_notifications(customer_id)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )

@router.get("/{notification_id}", response_model=NotificationResponse)
async def get_notification_status(notification_id: str):
    try:
        return await notification_service.get_notification_status(notification_id)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        ) 