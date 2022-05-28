import React, { FC } from "react"
import { Modal } from "../Modal/Modal"
import { ActionsContainer, Logo, SignIn, styles } from "./SignUpModal.styles"

import logo from "../../assets/icons/logo.svg"
import { Input } from "../Input/Input"
import { Button } from "../Button/Button"

type Props = {}

const SignUpModal: FC<Props> = () => {
  return (
    <Modal>
      <div className={styles()}>
        <Logo src={logo} alt="" />
        <Input size="default" placeholder="Введите логин" label="Логин" />
        <Input size="default" placeholder="Введите пароль" label="Пароль" />
        <Input
          size="default"
          placeholder="Введите пароль еще раз"
          label="Повторите пароль"
        />
        <ActionsContainer>
          <SignIn>
            <p>Уже есть аккаунт?</p>
            <a href="/">Войти</a>
          </SignIn>
          <Button>Зарегистрироваться</Button>
        </ActionsContainer>
      </div>
    </Modal>
  )
}

export { SignUpModal }
