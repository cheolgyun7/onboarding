// src/store/authStore.js
import create from "zustand";

type AuthState = {
  chkAuth: boolean;
  userId: string | null;
  nickname: string | null;
  avatar: string | null;
  setUserId: (userId: string) => void;

  setChkAuth: (value: boolean) => void;
};

const useAuthStore = create<AuthState>((set) => ({
  chkAuth: false,
  userId: null,
  nickname: null,
  avatar: null,
  setUserId: (userId: string) => set({ userId: userId }),
  setChkAuth: (value: boolean) => set({ chkAuth: value }),
}));

export default useAuthStore;
