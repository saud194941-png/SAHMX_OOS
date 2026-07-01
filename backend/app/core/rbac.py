from fastapi import HTTPException, status

ROLE_ORDER = {"Viewer": 1, "Analyst": 2, "Admin": 3, "Owner": 4}


def require_role(current_role: str, required_role: str) -> None:
    if ROLE_ORDER.get(current_role, 0) < ROLE_ORDER.get(required_role, 0):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Insufficient permissions")
