import React, { FC } from "react"
import { Button } from "../Button/Button"
import {
  CartContainer,
  CartItem,
  Item,
  Price,
  styles,
  Title,
  Total,
  TotalContainer,
} from "./Cart.styles"

const Cart: FC = () => {
  return (
    <div className={styles()}>
      <Title>Итого</Title>
      <CartContainer>
        <CartItem>
          <Item>Apple Watch Series 7 — 42mm</Item>
          <hr />
          <Price>37 900 ₽</Price>
        </CartItem>
        <CartItem>
          <Item>Apple Watch Series 7 — 42mm</Item>
          <hr />
          <Price>37 900 ₽</Price>
        </CartItem>
        <CartItem>
          <Item>Apple Watch Series 7 — 42mm</Item>
          <hr />
          <Price>37 900 ₽</Price>
        </CartItem>
      </CartContainer>
      <TotalContainer>
        <Total>113 700 ₽</Total>
        <Button size="small">Оформить</Button>
      </TotalContainer>
    </div>
  )
}

export { Cart }
