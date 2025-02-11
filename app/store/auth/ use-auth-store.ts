import { create } from "zustand";

interface AuthState {
  isRegisterOpen: boolean;
  setRegisterOpen: (open: boolean) => void;
  isLoginOpen: boolean;
  setLoginOpen: (open: boolean) => void;
  switchToLogin: () => void;
  switchToRegister: () => void;
  role: "student" | "teacher";
  setRole: (role: "student" | "teacher") => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isRegisterOpen: false,
  setRegisterOpen: (open) => set({ isRegisterOpen: open }),
  isLoginOpen: false,
  setLoginOpen: (open) => set({ isLoginOpen: open }),
  switchToLogin: () => set({ isRegisterOpen: false, isLoginOpen: true }),
  switchToRegister: () => set({ isRegisterOpen: true, isLoginOpen: false }),
  role: "student",
  setRole: (role) => set({ role }),
}));
