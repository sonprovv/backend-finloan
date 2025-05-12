from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import auth_proxy, customer_proxy, identity_verification_proxy, payment_scheduling_proxy, risk_assessment_proxy, credit_score_proxy

app = FastAPI(title="API Gateway")

# ✅ Cấu hình CORS tại gateway
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include proxy routes
app.include_router(auth_proxy.router, prefix="/auth")
app.include_router(customer_proxy.router)
app.include_router(identity_verification_proxy.router, prefix="/api")
app.include_router(payment_scheduling_proxy.router)
app.include_router(risk_assessment_proxy.router)
app.include_router(credit_score_proxy.router)

if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)