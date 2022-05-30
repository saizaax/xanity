import React, { FC } from "react"
import { Modal } from "../Modal/Modal"
import { ActionsContainer, Logo, SignIn, styles } from "./SignUpModal.styles"

import logo from "../../assets/icons/logo.svg"
import { Input } from "../Input/Input"
import { Button } from "../Button/Button"
import { SettingsContext } from "../../context/SettingsContext"
import { register } from "../../api/auth"
import Cookies from "js-cookie"
import { AuthContext } from "../../context/AuthContext"

type Props = {}

const SignUpModal: FC<Props> = () => {
  const { settingsContext } = React.useContext(SettingsContext)
  const { tokenContext, isLoggedContext } = React.useContext(AuthContext)

  const [, setToken] = tokenContext
  const [, setIsLogged] = isLoggedContext
  const [settings, setSettings] = settingsContext

  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [repeatPassword, setRepeatPassword] = React.useState("")

  const handleSignUp = async () => {
    if (password === repeatPassword) {
      try {
        const res = await register(username, password)
        if (res) {
          Cookies.set("token", res.token)
          setToken(res.token)
          setIsLogged(true)
          setSettings({ ...settings, signUpModal: false })
        }
      } catch (err) {
        console.error(err)
      }
    }
  }

  return (
    <>
      {settings.signUpModal ? (
        <Modal onClose={() => setSettings({ ...settings, signUpModal: false })}>
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
            <Input
              size="default"
              placeholder="Введите пароль еще раз"
              label="Повторите пароль"
              type="password"
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
            <ActionsContainer>
              <SignIn>
                <p>Уже есть аккаунт?</p>
                <button
                  onClick={() =>
                    setSettings({
                      ...settings,
                      signInModal: true,
                      signUpModal: false,
                    })
                  }
                >
                  Войти
                </button>
              </SignIn>
              <Button onClick={handleSignUp}>Зарегистрироваться</Button>
            </ActionsContainer>
          </div>
        </Modal>
      ) : null}
    </>
  )
}

export { SignUpModal }
