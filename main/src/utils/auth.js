import cookies from 'js-cookie'

export function getCookie(cookieKey) {
  return cookies.get(cookieKey)
}

export function setCookie(cookieKey, token) {
  return cookies.set(cookieKey, token)
}

export function removeCookie(cookieKey) {
  return cookies.remove(cookieKey)
}

/**
 * 存储localStorage
 */
export const setLocalStorage = (TokenKey, content) => {
  if (!TokenKey) return
  window.localStorage.setItem(TokenKey, content)
}

/**
 * 获取localStorage
 */
export const getLocalStorage = TokenKey => {
  if (!TokenKey) return
  return window.localStorage.getItem(TokenKey)
}

/**
 * 删除localStorage
 */
export const removeLocalStorage = TokenKey => {
  if (!TokenKey) return
  window.localStorage.removeItem(TokenKey)
}

/**
 * 存储sessionStorage
 */
 export const setSessionStorage = (TokenKey, content) => {
  if (!TokenKey) return
  window.sessionStorage.setItem(TokenKey, content)
}

/**
 * 获取sessionStorage
 */
export const getSessionStorage = TokenKey => {
  if (!TokenKey) return
  return window.sessionStorage.getItem(TokenKey)
}

/**
 * 删除localStorage
 */
export const removeSessionStorage = TokenKey => {
  if (!TokenKey) return
  window.sessionStorage.removeItem(TokenKey)
}
/**
 * 获取当前时间戳
 */
export const getNowTime = () => {
  return parseInt(new Date().getTime() / 1000)
}
