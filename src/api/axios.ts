import axios from "axios";

export const jsonInstance = axios.create({
  baseURL: import.meta.env.VITE_API_TEST_URL,
});
export const authInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
