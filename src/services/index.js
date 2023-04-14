import axios from './config'

export async function authLogin(payload) {
  return axios.post('auth/login', payload)
}
