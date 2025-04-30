from fastapi import Request
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException as StarletteHTTPException
from starlette.requests import Request
from starlette.responses import Response
from typing import Union

def http_exception_handler(request: Request, exc: StarletteHTTPException) -> Response:
    return JSONResponse(
        status_code=exc.status_code,
        content={"message": exc.detail},
    )

def validation_exception_handler(request: Request, exc: RequestValidationError) -> Response:
    return JSONResponse(
        status_code=422,
        content={"message": "Validation error", "details": exc.errors()},
    )

def general_exception_handler(request: Request, exc: Exception) -> Response:
    return JSONResponse(
        status_code=500,
        content={"message": "Internal server error"},
    )
