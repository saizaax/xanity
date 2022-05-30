import React, { useState, createContext, FC } from "react"

export const SettingsContext = createContext<any>(undefined)

type Props = {
  children: React.ReactNode
}

export interface Settings {
  signInModal: boolean
  signUpModal: boolean
  orderModal: boolean
}

export const SettingsProvider: FC<Props> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>({
    signInModal: false,
    signUpModal: false,
    orderModal: false,
  })

  return (
    <SettingsContext.Provider
      value={{
        settingsContext: [settings, setSettings],
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}
