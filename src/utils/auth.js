// 封装cookies操作
import cookies from 'js-cookie'

const Token = 'Admin-Token'

export function getToken() {
  return Cookies.get(Token)
}

export function setToken(token) {
  return Cookies.set(Token, token)
}

export function removeToken() {
  return Cookies.remove(Token)
}
