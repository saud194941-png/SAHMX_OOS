from fastapi import APIRouter, HTTPException
from app.ai.providers import ai_provider
from app.core.security import create_token, hash_password
from app.schemas.common import AIAnswer, AIQuestion, LoginRequest, RegisterRequest, SimulationRequest, TokenResponse
from app.services import seed_data

api_router = APIRouter()


@api_router.get("/health")
async def health():
    return {"status": "ok", "service": "SAHMX OS API"}


auth_router = APIRouter(prefix="/auth", tags=["auth"])


@auth_router.post("/login", response_model=TokenResponse)
async def login(payload: LoginRequest):
    if payload.email != "demo@sahmx.sa":
        raise HTTPException(status_code=401, detail="Invalid demo credentials")
    return TokenResponse(
        access_token=create_token(payload.email, "Owner"),
        refresh_token=create_token(payload.email, "Owner", minutes=60 * 24 * 7),
        role="Owner"
    )


@auth_router.post("/register", response_model=TokenResponse)
async def register(payload: RegisterRequest):
    _ = hash_password(payload.password)
    return TokenResponse(
        access_token=create_token(payload.email, "Owner"),
        refresh_token=create_token(payload.email, "Owner", minutes=60 * 24 * 7),
        role="Owner"
    )


@auth_router.post("/refresh", response_model=TokenResponse)
async def refresh():
    return TokenResponse(access_token=create_token("demo@sahmx.sa", "Owner"), refresh_token=create_token("demo@sahmx.sa", "Owner", minutes=60 * 24 * 7), role="Owner")


@auth_router.get("/me")
async def me():
    return {"name": "سعود سعد العتيبي", "email": "demo@sahmx.sa", "role": "Owner"}


@auth_router.post("/logout")
async def logout():
    return {"ok": True}


@api_router.get("/dashboard")
async def dashboard():
    return {
        "company": seed_data.COMPANY,
        "executive_summary": "Financial position is stable, growth is positive, and recurring expenses should be reduced before expansion.",
        "ai_decision": "Negotiate PayGate and optimize subscriptions before opening a new branch.",
        "alerts": seed_data.ALERTS,
        "kpis": {
            "financial_health_score": 83,
            "revenue": 428000,
            "expenses": 286000,
            "net_profit": 142000,
            "burn_rate": 98000,
            "cash_runway": 14
        }
    }


@api_router.post("/ai-cfo/chat", response_model=AIAnswer)
async def ai_cfo_chat(payload: AIQuestion):
    answer, provider = await ai_provider.answer(payload.question)
    return AIAnswer(answer=answer, provider=provider)


@api_router.post("/simulations/run")
async def run_simulation(payload: SimulationRequest):
    gain = payload.cost * (payload.expected_roi / 100)
    safety_score = max(20, min(94, round(88 - payload.cost / 10000 + payload.expected_roi / 2)))
    return {
        "scenario": payload.scenario,
        "expected_impact": gain,
        "risk_level": "high" if safety_score < 55 else "medium" if safety_score < 75 else "low",
        "cash_impact": -payload.cost,
        "profit_impact": gain - payload.cost,
        "safety_score": safety_score,
        "ai_recommendation": "نفّذ على مراحل مع سقف تكلفة واضح." if safety_score >= 70 else "انتظر حتى تتحسن السيولة."
    }


def list_response(name: str):
    mapping = {
        "companies": [seed_data.COMPANY],
        "financials": {"accounts": [{"name": "Main Bank", "balance": 294000}, {"name": "Investment Wallet", "balance": 155000}]},
        "transactions": seed_data.TRANSACTIONS,
        "analytics": {"revenue_growth": 18, "profit_margin": 33, "risk_score": 28},
        "contracts": seed_data.CONTRACTS,
        "negotiations": [{"contract": "PayGate", "savings_potential": 18000, "status": "draft"}],
        "predictions": [{"month": "July", "revenue": 462000, "expenses": 301000, "confidence": 87}],
        "investments": seed_data.INVESTMENTS,
        "suppliers": seed_data.SUPPLIERS,
        "subscriptions": seed_data.SUBSCRIPTIONS,
        "reports": [{"type": "Executive Report", "status": "ready"}, {"type": "Risk Report", "status": "ready"}],
        "notifications": [{"title": item, "is_read": False} for item in seed_data.ALERTS],
        "admin": {"users": 12, "companies": 3, "api_usage": "48K tokens", "audit_events": 186},
        "onboarding": {"steps": 5, "financial_dna": "generated", "health_score": 83}
    }
    return mapping[name]


for route_name in [
    "companies",
    "onboarding",
    "financials",
    "transactions",
    "analytics",
    "contracts",
    "negotiations",
    "predictions",
    "investments",
    "suppliers",
    "subscriptions",
    "reports",
    "notifications",
    "admin"
]:
    api_router.add_api_route(f"/{route_name}", lambda name=route_name: list_response(name), methods=["GET"], tags=[route_name])

api_router.include_router(auth_router)
