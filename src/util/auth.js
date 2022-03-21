// import Cookies from 'js-cookie'
// const TokenKey = 'xfqb-business-token'
// const RefreshTokenKey = 'xfqb-refresh-token'
export function getToken () {
  return sessionStorage.getItem("Token")
}

// export function setToken (token) {
//   return Cookies.set(TokenKey, token)
// }

// export function getRefreshToken () {
//   return Cookies.get(RefreshTokenKey)
// }

// export function setRefreshToken (token) {
//   return Cookies.set(RefreshTokenKey, token)
// }

// export function removeToken () {
//   return Cookies.remove(TokenKey)
// }

// export function removeRefreshToken () {
//   return Cookies.remove(RefreshTokenKey)
// }

