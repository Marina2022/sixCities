const TOKEN = 'six-cities-token'


export const getToken = () => {
  return localStorage.getItem(TOKEN)
}

type Token = string

export const setToken = (token: Token) => {
  localStorage.setItem(TOKEN, token)
}

export const dropToken = () => {
  return localStorage.removeItem(TOKEN)
}
