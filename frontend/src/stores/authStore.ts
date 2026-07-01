import { demoUser } from "@/data/seed";
import { User } from "@/types";

type AuthState = {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  demoLogin: () => void;
  logout: () => void;
};

let state: AuthState = {
  user: null,
  isLoading: false,
  error: null,
  demoLogin: () => {
    const user: User = {
      id: demoUser.id,
      name: demoUser.name,
      email: demoUser.email,
      role: demoUser.role
    };
    localStorage.setItem("sahmx_access_token", "demo.jwt.token");
    state.user = user;
    state.error = null;
  },
  logout: () => {
    localStorage.removeItem("sahmx_access_token");
    state.user = null;
  }
};

export function getAuthStore() {
  return state;
}
