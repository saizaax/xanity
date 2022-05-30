import { IToken, IUser, IUserResponse } from "../interfaces/auth.interface"
import { API } from "./api"

export const login = async (username: string, password: string) => {
  return await API.post<IToken>("auth/login", {
    username: username,
    password: password,
  })
    .then((response) => {
      return response.data
    })
    .catch((error) => console.error(error))
}

export const register = async (username: string, password: string) => {
  const userPayload = await API.post<IUserResponse>("auth/register", {
    username: username,
    password: password,
  })
    .then((response) => {
      return response.data
    })
    .catch((error) => console.error(error))

  if (userPayload) return await login(username, password)

  // return await login(username, password)
}

export const preauthorize = async (token: string) => {
  return await API.get<IUser>("auth/preauthorize", {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((response) => {
      return response.data
    })
    .catch((error) => console.error(error))
}
