import http from "./config";

export async function authLogin(payload) {
  return http.post("auth/login", payload);
}

export async function createUser(payload) {
  return http.post("users", payload);
}
