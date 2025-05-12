from pydantic_settings import BaseSettings
from functools import lru_cache

class Settings(BaseSettings):
    # Email Configuration
    smtp_server: str
    smtp_port: int
    smtp_username: str
    smtp_password: str

    # SMS Configuration
    sms_api_key: str
    sms_api_url: str

    class Config:
        env_file = ".env"
        case_sensitive = True

@lru_cache()
def get_settings() -> Settings:
    return Settings()