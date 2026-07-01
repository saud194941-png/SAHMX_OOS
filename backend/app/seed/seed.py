import asyncio
from app.core.security import hash_password
from app.database import Base, SessionLocal, engine
from app.models import Company, Contract, FinancialAccount, Investment, Notification, Subscription, Supplier, Transaction, User
from app.services import seed_data


async def seed():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    async with SessionLocal() as session:
        user = User(name="سعود سعد العتيبي", email="demo@sahmx.sa", password_hash=hash_password("Demo@12345"), role="Owner")
        session.add(user)
        await session.flush()
        company = Company(name="SAHM X Labs", city="Jeddah", country="Saudi Arabia", currency="SAR", industry="AI FinTech", owner_id=user.id)
        session.add(company)
        await session.flush()
        session.add_all([
            FinancialAccount(company_id=company.id, name="Main Bank Account", type="bank", balance=294000),
            FinancialAccount(company_id=company.id, name="Investment Wallet", type="investment", balance=155000)
        ])
        session.add_all([Transaction(company_id=company.id, **item) for item in seed_data.TRANSACTIONS])
        session.add_all([Contract(company_id=company.id, dangerous_clauses=["auto-renewal", "60-day cancellation"], **item) for item in seed_data.CONTRACTS])
        session.add_all([Supplier(company_id=company.id, **item) for item in seed_data.SUPPLIERS])
        session.add_all([Subscription(company_id=company.id, **item) for item in seed_data.SUBSCRIPTIONS])
        session.add_all([Investment(company_id=company.id, **item) for item in seed_data.INVESTMENTS])
        session.add_all([Notification(company_id=company.id, type="ai", title=item[:80], message=item) for item in seed_data.ALERTS])
        await session.commit()
    print("SAHMX seed data inserted.")


if __name__ == "__main__":
    asyncio.run(seed())
