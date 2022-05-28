import React, { FC } from "react"
import { Button } from "../Button/Button"
import { CartItem } from "../CartItem/CartItem"
import { Input } from "../Input/Input"
import { Modal } from "../Modal/Modal"
import { Select } from "../Select/Select"
import { Separator } from "../Separator/Separator"
import {
  InputContainer,
  Products,
  Selectors,
  styles,
  SelectorContainer,
  Title,
  ActionsContainer,
} from "./OrderModal.styles"

type Props = {}

const OrderModal: FC<Props> = () => {
  return (
    <Modal size="large">
      <div className={styles()}>
        <h2>Оформление заказа</h2>
        <Products>
          <CartItem title="Apple Watch Series 7 — 42mm" price={37900} />
          <CartItem title="Apple Watch Series 7 — 42mm" price={37900} />
          <CartItem title="Apple Watch Series 7 — 42mm" price={37900} />
          <CartItem title="Итого" price={113000} color="primary" />
        </Products>
        <Separator />
        <InputContainer>
          <Input size="default" placeholder="Введите ФИО" label="ФИО" />
          <Input size="default" placeholder="Введите номер телефона" label="Номер телефона" />
          <Input size="default" placeholder="Введите город" label="Город" />
          <Input size="default" placeholder="Введите адрес доставки" label="Адрес доставки" />
        </InputContainer>
        <SelectorContainer>
          <Title>Удобное время</Title>
          <Selectors>
            <Select type="primary">09:00 - 11:00</Select>
            <Select>11:00 - 13:00</Select>
            <Select>13:00 - 15:00</Select>
            <Select>15:00 - 17:00</Select>
            <Select>17:00 - 19:00</Select>
            <Select>19:00 - 21:00</Select>
            <Select>21:00 - 23:00</Select>
          </Selectors>
        </SelectorContainer>
        <SelectorContainer>
          <Title>Способ оплаты</Title>
          <Selectors>
            <Select type="primary">Наличными</Select>
          </Selectors>
        </SelectorContainer>
        <ActionsContainer>
          <Button size="small" color="border">Отмена</Button>
          <Button size="small">Оформить заказ</Button>
        </ActionsContainer>
      </div>
    </Modal>
  )
}

export { OrderModal }
