from datetime import datetime
from sqlalchemy import Boolean, DateTime, Float, ForeignKey, Integer, JSON, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.database import Base


class TimestampMixin:
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    updated_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)


class User(Base, TimestampMixin):
    __tablename__ = "users"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(120))
    email: Mapped[str] = mapped_column(String(180), unique=True, index=True)
    password_hash: Mapped[str] = mapped_column(String(255))
    role: Mapped[str] = mapped_column(String(30), default="Owner")
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)


class Company(Base, TimestampMixin):
    __tablename__ = "companies"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(160))
    city: Mapped[str] = mapped_column(String(80), default="Jeddah")
    country: Mapped[str] = mapped_column(String(80), default="Saudi Arabia")
    currency: Mapped[str] = mapped_column(String(10), default="SAR")
    industry: Mapped[str] = mapped_column(String(120), default="FinTech")
    owner_id: Mapped[int | None] = mapped_column(ForeignKey("users.id"))
    owner = relationship("User")


class FinancialAccount(Base, TimestampMixin):
    __tablename__ = "financial_accounts"
    id: Mapped[int] = mapped_column(primary_key=True)
    company_id: Mapped[int] = mapped_column(ForeignKey("companies.id"))
    name: Mapped[str] = mapped_column(String(120))
    type: Mapped[str] = mapped_column(String(50))
    balance: Mapped[float] = mapped_column(Float, default=0)


class Transaction(Base, TimestampMixin):
    __tablename__ = "transactions"
    id: Mapped[int] = mapped_column(primary_key=True)
    company_id: Mapped[int] = mapped_column(ForeignKey("companies.id"))
    account_id: Mapped[int | None] = mapped_column(ForeignKey("financial_accounts.id"))
    type: Mapped[str] = mapped_column(String(30))
    category: Mapped[str] = mapped_column(String(80))
    description: Mapped[str] = mapped_column(String(255))
    amount: Mapped[float] = mapped_column(Float)
    status: Mapped[str] = mapped_column(String(40), default="completed")


class Contract(Base, TimestampMixin):
    __tablename__ = "contracts"
    id: Mapped[int] = mapped_column(primary_key=True)
    company_id: Mapped[int] = mapped_column(ForeignKey("companies.id"))
    name: Mapped[str] = mapped_column(String(140))
    party: Mapped[str] = mapped_column(String(140))
    value: Mapped[float] = mapped_column(Float)
    renewal_date: Mapped[str] = mapped_column(String(30))
    risk_score: Mapped[int] = mapped_column(Integer, default=0)
    dangerous_clauses: Mapped[list] = mapped_column(JSON, default=list)


class Supplier(Base, TimestampMixin):
    __tablename__ = "suppliers"
    id: Mapped[int] = mapped_column(primary_key=True)
    company_id: Mapped[int] = mapped_column(ForeignKey("companies.id"))
    name: Mapped[str] = mapped_column(String(120))
    category: Mapped[str] = mapped_column(String(80))
    contract_value: Mapped[float] = mapped_column(Float)
    performance_score: Mapped[int] = mapped_column(Integer)


class Subscription(Base, TimestampMixin):
    __tablename__ = "subscriptions"
    id: Mapped[int] = mapped_column(primary_key=True)
    company_id: Mapped[int] = mapped_column(ForeignKey("companies.id"))
    service: Mapped[str] = mapped_column(String(120))
    category: Mapped[str] = mapped_column(String(80))
    monthly_cost: Mapped[float] = mapped_column(Float)
    ai_recommendation: Mapped[str] = mapped_column(String(120))


class AIReport(Base, TimestampMixin):
    __tablename__ = "ai_reports"
    id: Mapped[int] = mapped_column(primary_key=True)
    company_id: Mapped[int] = mapped_column(ForeignKey("companies.id"))
    type: Mapped[str] = mapped_column(String(80))
    content: Mapped[str] = mapped_column(Text)
    provider: Mapped[str] = mapped_column(String(40), default="mock")


class Simulation(Base, TimestampMixin):
    __tablename__ = "simulations"
    id: Mapped[int] = mapped_column(primary_key=True)
    company_id: Mapped[int] = mapped_column(ForeignKey("companies.id"))
    scenario: Mapped[str] = mapped_column(String(120))
    inputs: Mapped[dict] = mapped_column(JSON, default=dict)
    expected_impact: Mapped[dict] = mapped_column(JSON, default=dict)
    safety_score: Mapped[int] = mapped_column(Integer)


class RiskScore(Base, TimestampMixin):
    __tablename__ = "risk_scores"
    id: Mapped[int] = mapped_column(primary_key=True)
    company_id: Mapped[int] = mapped_column(ForeignKey("companies.id"))
    scope: Mapped[str] = mapped_column(String(80))
    score: Mapped[int] = mapped_column(Integer)
    explanation: Mapped[str] = mapped_column(Text)


class Forecast(Base, TimestampMixin):
    __tablename__ = "forecasts"
    id: Mapped[int] = mapped_column(primary_key=True)
    company_id: Mapped[int] = mapped_column(ForeignKey("companies.id"))
    month: Mapped[str] = mapped_column(String(30))
    revenue: Mapped[float] = mapped_column(Float)
    expenses: Mapped[float] = mapped_column(Float)
    cash_flow: Mapped[float] = mapped_column(Float)
    confidence: Mapped[int] = mapped_column(Integer)


class Negotiation(Base, TimestampMixin):
    __tablename__ = "negotiations"
    id: Mapped[int] = mapped_column(primary_key=True)
    contract_id: Mapped[int | None] = mapped_column(ForeignKey("contracts.id"))
    suggested_terms: Mapped[list] = mapped_column(JSON, default=list)
    draft_response: Mapped[str] = mapped_column(Text)
    savings_potential: Mapped[float] = mapped_column(Float)
    status: Mapped[str] = mapped_column(String(40))


class Investment(Base, TimestampMixin):
    __tablename__ = "investments"
    id: Mapped[int] = mapped_column(primary_key=True)
    company_id: Mapped[int] = mapped_column(ForeignKey("companies.id"))
    name: Mapped[str] = mapped_column(String(140))
    amount: Mapped[float] = mapped_column(Float)
    roi: Mapped[float] = mapped_column(Float)
    risk_level: Mapped[str] = mapped_column(String(40))
    ai_score: Mapped[int] = mapped_column(Integer)
    sustainability_score: Mapped[int] = mapped_column(Integer)
    recommendation: Mapped[str] = mapped_column(String(120))


class Notification(Base, TimestampMixin):
    __tablename__ = "notifications"
    id: Mapped[int] = mapped_column(primary_key=True)
    company_id: Mapped[int] = mapped_column(ForeignKey("companies.id"))
    type: Mapped[str] = mapped_column(String(60))
    title: Mapped[str] = mapped_column(String(160))
    message: Mapped[str] = mapped_column(Text)
    is_read: Mapped[bool] = mapped_column(Boolean, default=False)


class AuditLog(Base, TimestampMixin):
    __tablename__ = "audit_logs"
    id: Mapped[int] = mapped_column(primary_key=True)
    actor_id: Mapped[int | None] = mapped_column(ForeignKey("users.id"))
    action: Mapped[str] = mapped_column(String(140))
    metadata_json: Mapped[dict] = mapped_column(JSON, default=dict)
