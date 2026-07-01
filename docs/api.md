# SAHMX OS API

Base URL: `http://localhost:8000/api/v1`

## Auth

- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/refresh`
- `GET /auth/me`
- `POST /auth/logout`

Demo account:

- Email: `demo@sahmx.sa`
- Password: `Demo@12345`
- Role: `Owner`

## Product Routes

- `GET /companies`
- `GET /onboarding`
- `GET /dashboard`
- `GET /financials`
- `GET /transactions`
- `GET /analytics`
- `POST /ai-cfo/chat`
- `POST /simulations/run`
- `GET /contracts`
- `GET /negotiations`
- `GET /predictions`
- `GET /investments`
- `GET /reports`
- `GET /notifications`
- `GET /admin`

## AI Mode

Default mode is mock. Set `AI_PROVIDER=openai` and `OPENAI_API_KEY` later to connect a real OpenAI client. Gemini follows the same architecture through `AI_PROVIDER=gemini` and `GEMINI_API_KEY`.
