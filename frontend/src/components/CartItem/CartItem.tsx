import React, { FC } from "react"
import { Item, Price, styles } from "./CartItem.styles"

type Props = {
  title: string,
  price: number,
  color?: "primary"
}

const CartItem: FC<Props> = ({ title, price, color }) => {
  return (
    <div className={styles()}>
      <Item color={color}>{title}</Item>
      <hr />
      <Price>{price.toLocaleString()} ₽</Price>
    </div>
  )
}

export { CartItem }