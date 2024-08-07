// src/store/authStore.js
import create from "zustand";

type AuthState = {
  chkAuth: boolean;
  setChkAuth: (value: boolean) => void;
};

const useAuthStore = create<AuthState>((set) => ({
  chkAuth: false,
  setChkAuth: (value: boolean) => set({ chkAuth: value }),
}));

export default useAuthStore;
