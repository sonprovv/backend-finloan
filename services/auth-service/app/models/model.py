from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import relationship, declarative_base
from datetime import datetime

from app.core.database import Base


class UserAccount(Base):
    __tablename__ = "user_account"
    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String(100), unique=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    roles = relationship("UserRole", back_populates="user")


class Role(Base):
    __tablename__ = "role"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(50), unique=True, nullable=False)
    description = Column(String(255))
    users = relationship("UserRole", back_populates="role")


class UserRole(Base):
    __tablename__ = "user_role"
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("user_account.id"), nullable=False)
    role_id = Column(Integer, ForeignKey("role.id"), nullable=False)
    user = relationship("UserAccount", back_populates="roles")
    role = relationship("Role", back_populates="users")
