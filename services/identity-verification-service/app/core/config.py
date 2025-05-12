import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Identity Verification Service"
    DATABASE_URL: str = os.getenv(
        "DATABASE_URL",
        "mysql+pymysql://identity_verification_user:identity_verification_password@identity-verification-db:3306/identity_verification_db"
    )
    
    # Database settings - these fields need to be added to match what's being set
    mysql_user: str = "identity_verification_user"
    mysql_password: str = "identity_verification_password"
    mysql_host: str = "identity-verification-db"
    mysql_port: str = "3306"
    mysql_db: str = "identity_verification_db"
    
    # OCR and ID verification settings
    UPLOAD_DIR: str = os.getenv("UPLOAD_DIR", "uploads")
    MAX_UPLOAD_SIZE: int = int(os.getenv("MAX_UPLOAD_SIZE", 10 * 1024 * 1024))  # 10MB
    ALLOWED_EXTENSIONS: list = [".jpg", ".jpeg", ".png", ".pdf"]
    
    # OCR.space API settings - Free tier (https://ocr.space/ocrapi)
    OCR_API_KEY: str = os.getenv("OCR_API_KEY", "K84590567688957")
    OCR_API_ENDPOINT: str = os.getenv("OCR_API_ENDPOINT", "https://api.ocr.space/parse/image")
    
    # ID verification API settings (external service)
    VERIFICATION_API_KEY: str = os.getenv("VERIFICATION_API_KEY", "")
    VERIFICATION_API_ENDPOINT: str = os.getenv("VERIFICATION_API_ENDPOINT", "https://api.verification-provider.com/verify")
    
    # Security settings
    SECRET_KEY: str = os.getenv("SECRET_KEY", "f823j0498fpj9821089jf128h0v1p2h0198hfe192hf0921h8f")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"
        extra = "allow"  # This allows extra fields without validation errors

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        print(f"OCR_API_KEY: {self.OCR_API_KEY}")
        print(f"OCR_API_ENDPOINT: {self.OCR_API_ENDPOINT}")

settings = Settings()