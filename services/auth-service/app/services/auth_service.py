from datetime import timedelta

from fastapi import HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials
from sqlalchemy.orm import Session

from . import security_service
from ..repositories import user_repository
from ..schemas.schema import RegisterRequest, LoginRequest, ValidateRequest, UserInfoResponse

# JWT config
SECRET_KEY = "ABASBDKAHSBDJH123123123123123123123"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Register user
def register_user(request: RegisterRequest, db: Session):
    existing_user = user_repository.get_user_by_username_or_email(db, request.username, request.email)
    if existing_user:
        raise HTTPException(status_code=400, detail="Username or email already registered")

    hashed_password = security_service.hash_password(request.password)
    user = user_repository.create_user(db, request.username, request.email, hashed_password)
    return {"message": "User registered successfully"}

# Login user
def login_user(request: LoginRequest, db: Session):
    user = user_repository.get_user_by_username(db, request.username)
    if not user or not user.is_active or not security_service.verify_password(request.password, user.password_hash):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token_data = {"sub": user.username}
    access_token = security_service.create_access_token(token_data, timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    return {"access_token": access_token, "token_type": "bearer"}

# Validate token
def validate_token(request: ValidateRequest):
    security_service.decode_access_token(request.token)
    return {"message": "Token is valid"}

# Get current user info
def get_current_user_info(credentials: HTTPAuthorizationCredentials, db: Session):
    token = credentials.credentials
    payload = security_service.decode_access_token(token)
    username = payload.get("sub")
    if username is None:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Unauthorized")

    user = user_repository.get_active_user_by_username(db, username)
    if user is None:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Unauthorized")

    roles = user_repository.get_roles_for_user(db, user.id)
    return UserInfoResponse(username=user.username, email=user.email, roles=roles)
