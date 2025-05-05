from typing import List

from pydantic import BaseModel, EmailStr


class RegisterRequest(BaseModel):
    username: str
    password: str
    email: EmailStr

class LoginRequest(BaseModel):
    username: str
    password: str

class TokenResponse(BaseModel):
    access_token: str
    token_type: str

class ValidateRequest(BaseModel):
    token: str

class UserInfoResponse(BaseModel):
    username: str
    email: EmailStr
    roles: List[str]