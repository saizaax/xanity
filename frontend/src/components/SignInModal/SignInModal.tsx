import React, { FC } from "react"
import { ActionsContainer, Logo, SignUp, styles } from "./SignInModal.styles"
import { Modal } from "../Modal/Modal"
import { Input } from "../Input/Input"
import { Button } from "../Button/Button"

import logo from "../../assets/icons/logo.svg"
import { SettingsContext } from "../../context/SettingsContext"
import { AuthContext } from "../../context/AuthContext"
import { login } from "../../api/auth"
import Cookies from "js-cookie"

type Props = {}

const SignInModal: FC<Props> = () => {
  const { settingsContext } = React.useContext(SettingsContext)
  const { tokenContext, isLoggedContext } = React.useContext(AuthContext)

  const [, setToken] = tokenContext
  const [, setIsLogged] = isLoggedContext
  const [settings, setSettings] = settingsContext

  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  const handleSignIn = async () => {
    try {
      const res = await login(username, password)
      if (res) {
        Cookies.set("token", res.token)
        setToken(res.token)
        setIsLogged(true)
        setSettings({ ...settings, signInModal: false })
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      {settings.signInModal ? (
        <Modal onClose={() => setSettings({ ...settings, signInModal: false })}>
          <div className={styles()}>
            <Logo src={logo} alt="" />
            <Input
              size="default"
              placeholder="Введите логин"
              label="Логин"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              size="default"
              placeholder="Введите пароль"
              label="Пароль"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <ActionsContainer>
              <SignUp>
                <p>Еще нет аккаунта?</p>
                <button
                  onClick={() =>
                    setSettings({
                      ...settings,
                      signInModal: false,
                      signUpModal: true,
                    })
                  }
                >
                  Зарегистрироваться
                </button>
              </SignUp>
              <Button onClick={handleSignIn}>Войти</Button>
            </ActionsContainer>
          </div>
        </Modal>
      ) : null}
    </>
  )
}

export { SignInModal }
