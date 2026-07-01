const baseURL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api/v1";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const headers = new Headers(init?.headers);
  headers.set("Content-Type", "application/json");
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("sahmx_access_token");
    if (token) headers.set("Authorization", `Bearer ${token}`);
  }
  const response = await fetch(`${baseURL}${path}`, { ...init, headers });
  if (!response.ok) throw new Error(`API request failed: ${response.status}`);
  return response.json() as Promise<T>;
}

export async function getDashboard() {
  return request("/dashboard");
}

export async function askAiCfo(question: string) {
  return request<{ answer: string; provider: string }>("/ai-cfo/chat", {
    method: "POST",
    body: JSON.stringify({ question })
  });
}
