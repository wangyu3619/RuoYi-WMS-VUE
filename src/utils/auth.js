import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const isElectron = import.meta.env.VITE_APP_ENV === 'electron'

export function getToken() {
  if (isElectron) {
    return localStorage.getItem(TokenKey) || undefined
  }
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  if (isElectron) {
    localStorage.setItem(TokenKey, token)
    return token
  }
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  if (isElectron) {
    localStorage.removeItem(TokenKey)
    return
  }
  return Cookies.remove(TokenKey)
}
