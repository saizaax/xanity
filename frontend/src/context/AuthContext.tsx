import React, { useState, createContext, FC } from "react"
import Cookies from "js-cookie"
import { IUser } from "../interfaces/auth.interface"
import { preauthorize } from "../api/auth"

export const AuthContext = createContext<any>(undefined)

type Props = {
  children: React.ReactNode
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [token, setToken] = useState<string | undefined>(Cookies.get("token"))
  const [isLogged, setIsLogged] = useState<boolean>(false)
  const [user, setUser] = useState<IUser | undefined>(undefined)

  React.useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("token")

      if (token) {
        const userPayload = await preauthorize(token)
        
        if (userPayload !== undefined) {
          setUser(userPayload)
          setIsLogged(true)
        }
      }
    }

    fetchData().catch(console.error)
  }, [token])

  return (
    <AuthContext.Provider
      value={{
        userContext: [user, setUser],
        tokenContext: [token, setToken],
        isLoggedContext: [isLogged, setIsLogged],
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
