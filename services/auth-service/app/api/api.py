from fastapi import APIRouter, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.orm import Session

from ..core.database import get_db
from ..schemas.schema import RegisterRequest, LoginRequest, TokenResponse, ValidateRequest, UserInfoResponse
from ..services import auth_service

router = APIRouter(prefix="/auth")

bearer_scheme = HTTPBearer()

# Register
@router.post("/register", status_code=201)
def register(request: RegisterRequest, db: Session = Depends(get_db)):
    return auth_service.register_user(request, db)

# Login
@router.post("/login", response_model=TokenResponse)
def login(request: LoginRequest, db: Session = Depends(get_db)):
    return auth_service.login_user(request, db)

# Validate Token
@router.post("/validate")
def validate(request: ValidateRequest):
    return auth_service.validate_token(request)

# Get Current User
@router.get("/me", response_model=UserInfoResponse)
def me(
    credentials: HTTPAuthorizationCredentials = Depends(bearer_scheme),
    db: Session = Depends(get_db),
):
    return auth_service.get_current_user_info(credentials, db)
