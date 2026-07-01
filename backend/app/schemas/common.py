from pydantic import BaseModel, EmailStr, Field


class LoginRequest(BaseModel):
    email: EmailStr
    password: str = Field(min_length=8)


class RegisterRequest(LoginRequest):
    name: str
    company_name: str = "SAHM X Labs"


class TokenResponse(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str = "bearer"
    role: str


class AIQuestion(BaseModel):
    question: str = Field(min_length=2, max_length=1000)


class AIAnswer(BaseModel):
    answer: str
    provider: str = "mock"


class SimulationRequest(BaseModel):
    scenario: str
    cost: float = 0
    expected_roi: float = 0
    months: int = 6
