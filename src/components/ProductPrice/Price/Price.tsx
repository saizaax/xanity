import React, { FC } from "react"
import { PriceContainer, styles } from "./Price.styles"

import checkIcon from "../../../assets/icons/check.svg"

type Props = {
  price: number
}

const Price: FC<Props> = ({ price }) => {
  return (
    <div className={styles()}>
      <PriceContainer>
        <span>Стоимость</span>
        <h3>{price.toLocaleString()} ₽</h3>
      </PriceContainer>
      <p><img src={checkIcon} alt="" /> В наличии</p>
    </div>
  )
}

export { Price }
