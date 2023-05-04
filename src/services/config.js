import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000,
});

instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");

    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
