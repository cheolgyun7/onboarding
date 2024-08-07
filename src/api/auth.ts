import { UserInfo } from "../types/type";
import { authInstance } from "./axios";

export const signUp = async (userInfo: UserInfo) => {
  try {
    const res = await authInstance.post("/register", userInfo);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const signIn = async (userInfo: Omit<UserInfo, "nickname">) => {
  try {
    const res = await authInstance.post("/login", userInfo);
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};