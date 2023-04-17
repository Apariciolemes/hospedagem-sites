import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (!token) return;

  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
