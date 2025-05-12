from typing import List, Optional
from motor.motor_asyncio import AsyncIOMotorClient
from app.core.config import settings

class AuditLogRepository:
    def __init__(self):
        self.client = AsyncIOMotorClient(settings.MONGODB_URL)
        self.db = self.client[settings.MONGODB_DB]
        self.collection = self.db.audit_logs

    async def create(self, audit_log: dict) -> dict:
        result = await self.collection.insert_one(audit_log)
        created_log = await self.collection.find_one({"_id": result.inserted_id})
        return self._convert_id(created_log)

    async def get_all(self) -> List[dict]:
        cursor = self.collection.find()
        logs = await cursor.to_list(length=None)
        return [self._convert_id(log) for log in logs]

    async def get_by_id(self, audit_log_id: str) -> Optional[dict]:
        log = await self.collection.find_one({"id": audit_log_id})
        return self._convert_id(log) if log else None

    def _convert_id(self, document: dict) -> dict:
        if document:
            document["id"] = str(document.pop("_id"))
        return document 