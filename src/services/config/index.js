import axios from "axios";

axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000,
});

export default axios;
