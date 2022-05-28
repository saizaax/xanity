import React, { FC } from "react"
import { Button } from "../Button/Button"
import { CartItem } from "../CartItem/CartItem"
import {
  CartContainer,
  styles,
  Title,
  Total,
  TotalContainer,
} from "./Cart.styles"

const Cart: FC = () => {
  return (
    <div className={styles()}>
      <CartContainer>
        <Title>Итого</Title>
        <CartItem title="Apple Watch Series 7 — 42mm" price={37990} />
        <CartItem title="Apple Watch Series 7 — 42mm" price={37990} />
        <CartItem title="Apple Watch Series 7 — 42mm" price={37990} />
      </CartContainer>
      <TotalContainer>
        <Total>113 700 ₽</Total>
        <Button size="small">Оформить</Button>
      </TotalContainer>
    </div>
  )
}

export { Cart }
