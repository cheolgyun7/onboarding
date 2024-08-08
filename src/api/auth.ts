import { UserInfo } from "../types/type";
import { authInstance } from "./axios";
import Cookies from "js-cookie";

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
    Cookies.set("accessToken", res.data.accessToken, {
      expires: 1 / 1440, // 1분 = 1/1440일
    });
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
