import React, { FC } from "react"
import { ActionsContainer, Logo, SignUp, styles } from "./SignInModal.styles"
import { Modal } from "../Modal/Modal"
import { Input } from "../Input/Input"
import { Button } from "../Button/Button"

import logo from "../../assets/icons/logo.svg"


type Props = {}

const SignInModal: FC<Props> = () => {
  return (
    <Modal>
      <div className={styles()}>
        <Logo src={logo} alt="" />
        <Input size="default" placeholder="Введите логин" label="Логин" />
        <Input size="default" placeholder="Введите пароль" label="Пароль" />
        <ActionsContainer>
          <SignUp>
            <p>Еще нет аккаунта?</p>
            <a href="/">Зарегистрироваться</a>
          </SignUp>
          <Button>Войти</Button>
        </ActionsContainer>
      </div>
    </Modal>
  )
}

export { SignInModal }
