from fastapi import Header, Depends, HTTPException
from jose import JWTError, jwt

# This should match the one used by auth-service to sign tokens
SECRET_KEY = "ABASBDKAHSBDJH123123123123123123123"
ALGORITHM = "HS256"


def extract_user_id_from_jwt(authorization: str = Header(...)):
    if not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Invalid authorization header")
    token = authorization[7:]  # Strip "Bearer "

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id = payload.get("id")
        if user_id is None:
            raise HTTPException(status_code=401, detail="user_id not found in token")
        return user_id
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid JWT token")