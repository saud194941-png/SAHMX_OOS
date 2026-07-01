from fastapi.testclient import TestClient
from app.main import app


client = TestClient(app)


def test_health():
    response = client.get("/api/v1/health")
    assert response.status_code == 200
    assert response.json()["status"] == "ok"


def test_mock_ai():
    response = client.post("/api/v1/ai-cfo/chat", json={"question": "كيف أخفض التكاليف؟"})
    assert response.status_code == 200
    assert response.json()["provider"] == "mock"
