from fastapi import FastAPI
from routers import auth_proxy

app = FastAPI(title="API Gateway")

# Include proxy routes
app.include_router(auth_proxy.router, prefix="/auth")

if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)