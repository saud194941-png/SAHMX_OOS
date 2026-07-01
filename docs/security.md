# Security Notes

- JWT access and refresh token architecture is in `backend/app/core/security.py`.
- Passwords use bcrypt through Passlib.
- RBAC helper is in `backend/app/core/rbac.py` with Owner, Admin, Analyst, Viewer.
- CORS is configured through `.env`.
- Rate limiting has a mock in-memory helper and can be moved to Redis.
- API keys are read from environment variables only.
- AuditLog model is ready for persistence.
