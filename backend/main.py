from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="AgriLink360 Internal API",
    description="Internal API for AgriLink360 web application",
    version="1.0.0"
)

# CORS middleware for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

security = HTTPBearer()

# Pydantic models
class UserLogin(BaseModel):
    username: str
    password: str

class UserResponse(BaseModel):
    id: int
    username: str
    email: str
    full_name: str

class MarketData(BaseModel):
    crop_name: str
    current_price: float
    trend: str
    demand_level: str

class LoanApplication(BaseModel):
    user_id: int
    amount: float
    purpose: str
    duration_months: int

# Root endpoint
@app.get("/")
async def root():
    return {"message": "AgriLink360 Internal API", "status": "running"}

# Authentication endpoints
@app.post("/api/auth/login")
async def login(user_data: UserLogin):
    # TODO: Implement actual authentication logic
    if user_data.username == "demo" and user_data.password == "password":
        return {"access_token": "demo_token", "token_type": "bearer"}
    raise HTTPException(status_code=401, detail="Invalid credentials")

@app.get("/api/auth/me")
async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    # TODO: Implement JWT token validation
    return UserResponse(
        id=1,
        username="demo",
        email="demo@agrilink360.com",
        full_name="Demo User"
    )

# Dashboard endpoints
@app.get("/api/dashboard/stats")
async def get_dashboard_stats():
    return {
        "total_farms": 156,
        "active_loans": 23,
        "market_alerts": 5,
        "crop_health_reports": 12
    }

# Market analysis endpoints
@app.get("/api/market/data")
async def get_market_data():
    return [
        MarketData(crop_name="Wheat", current_price=2500.0, trend="up", demand_level="high"),
        MarketData(crop_name="Rice", current_price=3200.0, trend="stable", demand_level="medium"),
        MarketData(crop_name="Cotton", current_price=5800.0, trend="down", demand_level="low")
    ]

# Microloans endpoints
@app.post("/api/loans/apply")
async def apply_for_loan(loan_data: LoanApplication):
    # TODO: Implement loan application logic
    return {"message": "Loan application submitted successfully", "application_id": "LA001"}

@app.get("/api/loans/status/{user_id}")
async def get_loan_status(user_id: int):
    return {
        "applications": [
            {"id": "LA001", "amount": 50000, "status": "approved", "disbursed": True},
            {"id": "LA002", "amount": 25000, "status": "pending", "disbursed": False}
        ]
    }

# Crop health prediction endpoints
@app.post("/api/crop-health/predict")
async def predict_crop_health():
    # TODO: Implement AI-based crop health prediction
    return {
        "health_score": 85,
        "status": "healthy",
        "recommendations": ["Increase watering frequency", "Monitor for pest activity"],
        "risk_factors": ["Weather conditions", "Soil moisture"]
    }

# Predictor assistant endpoints
@app.get("/api/assistant/recommendations/{user_id}")
async def get_personalized_recommendations(user_id: int):
    return {
        "recommendations": [
            "Consider applying for seasonal loan for upcoming harvest",
            "Monitor wheat prices - trending upward",
            "Schedule crop health check for Plot A"
        ]
    }

# Sales platform endpoints
@app.get("/api/sales/products")
async def get_products():
    return [
        {"id": 1, "name": "Organic Wheat", "price": 2800, "seller": "Farm Co.", "stock": 500},
        {"id": 2, "name": "Basmati Rice", "price": 4200, "seller": "Rice Mills Ltd.", "stock": 200}
    ]

@app.post("/api/sales/products")
async def add_product():
    # TODO: Implement product addition logic
    return {"message": "Product added successfully", "product_id": "P001"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)