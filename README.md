# SAHM X — AI Financial Operating System

سهم إكس هو MVP منظم لمنصة مالية ذكية للشركات ورواد الأعمال: Landing رسمي، تسجيل دخول، Onboarding، SAHM X Command Center، AI CFO، تحليلات، معاملات، عقود، تفاوض، توقعات، استثمارات، تقارير، تنبيهات، إعدادات، ولوحة إدارة.

## التشغيل

Frontend:

```bash
cd frontend
npm install
npm run dev
```

Backend:

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Docker:

```bash
cp .env.example .env
docker-compose up --build
```

Seed data:

```bash
cd backend
python -m app.seed.seed
```

## الحساب التجريبي

- Email: `demo@sahmx.sa`
- Password: `Demo@12345`
- Role: `Owner`

## المتغيرات البيئية

انسخ `.env.example` إلى `.env`. لا تضع مفاتيح حقيقية في الكود. عند غياب `OPENAI_API_KEY` يعمل AI CFO بوضع mock. لاحقًا يمكن تفعيل OpenAI عبر:

```env
AI_PROVIDER=openai
OPENAI_API_KEY=sk-...
```

## هيكل المشروع

- `frontend/`: Next.js 15 + React + TypeScript + Zustand + Recharts + Framer-ready architecture.
- `backend/`: FastAPI + SQLAlchemy Async + Pydantic + JWT + bcrypt + Redis-ready + OpenAI/Gemini-ready.
- `docs/`: توثيق الهوية وAPI.
- `docker-compose.yml`: PostgreSQL + Redis + Backend + Frontend.

## الصفحات

- Landing Page: Hero، الرؤية، المشكلة، المميزات، AI CFO، المحاكاة، التنبؤ، العقود، التقارير، أعمالنا، كلمة الرئيس التنفيذي، الإحصائيات، التواصل.
- Dashboard: Overview، AI CFO، Analytics، Financials، Transactions، Cash Flow، Simulations، Contracts، Negotiations، Predictions، Investments، Suppliers، Subscriptions، Reports، Notifications، Settings، Admin.
- Auth: Register/Login/Logout/Refresh/Current user architecture مع Demo mode.
- Onboarding: 5 خطوات تنتهي بـ Financial DNA وHealth Score وRisk Profile.

## API

راجع `docs/api.md` أو افتح:

```text
http://localhost:8000/api/docs
```

## ما الجاهز للربط الحقيقي لاحقًا

- ربط OpenAI/Gemini داخل `backend/app/ai/providers.py`.
- استبدال mock seed بعمليات PostgreSQL كاملة.
- إضافة Alembic migrations إنتاجية.
- WebSocket streaming لـ AI CFO.
- تخزين تقارير PDF/Excel حقيقية.
