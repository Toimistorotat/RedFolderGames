import axios from 'axios'

const registerURL = '/api/register'
const loginURL = '/api/login'
const logoutURL = '/api/logout'
const meURL = '/api/me'

const makeHeader = () => {
  return {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json'
    }
  }
}

const login = (userdata) => {
  const request = axios.post(loginURL, userdata, makeHeader())
  return request.then(response => response.data)
}

const register = (userdata) => {
  const request = axios.post(registerURL, userdata, makeHeader())
  return request.then(response => response.data)
}

const me = () => {
  const request = axios.get(meURL, makeHeader())
  return request.then(response => response.data)
}

const logout = () => {
  const request = axios.post(logoutURL, null, makeHeader())
  return request.then(response => response.data)
}

export default {
  register,
  login,
  me,
  logout
}