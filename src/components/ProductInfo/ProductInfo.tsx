import React, { FC } from "react"
import { ICharacteristic } from "../../interfaces/product.interface"
import { ProductCharacteristics } from "../ProductCharacteristics/ProductCharacteristics"
import { ProductDescription } from "../ProductDescription/ProductDescription"
import { styles } from "./ProductInfo.styles"

type Props = {
  description: string
  characteristics: ICharacteristic[]
}

const ProductInfo: FC<Props> = ({ description, characteristics }) => {
  return (
    <div className={styles()}>
      <ProductDescription description={description} />
      <ProductCharacteristics characteristics={characteristics} />
    </div>
  )
}

export { ProductInfo }
