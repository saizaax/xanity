import React, { FC } from "react"
import { Button } from "../Button/Button"
import { Price } from "./Price/Price"
import { OrderContainer, styles } from "./ProductPrice.styles"

import clockIcon from "../../assets/icons/clock.svg"

type Props = {
  price?: number
}

const pr = 37900

const ProductPrice: FC<Props> = ({ price }) => {
  return (
    <div className={styles()}>
      <Price price={pr} />
      <OrderContainer>
        <Button size="small">В корзину</Button>
        <p>
          <img src={clockIcon} alt="" /> Доставка от 1 до 3 дней
        </p>
      </OrderContainer>
    </div>
  )
}

export { ProductPrice }
