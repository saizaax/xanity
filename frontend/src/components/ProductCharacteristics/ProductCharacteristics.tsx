import React, { FC } from "react"
import { ICharacteristic } from "../../interfaces/product.interface"
import { CharacteristicsItem } from "./CharacteristicsItem/CharacteristicsItem"
import {
  CharacteristicsContainer,
  styles,
} from "./ProductCharacteristics.styles"

type Props = {
  characteristics: ICharacteristic[]
}

const ProductCharacteristics: FC<Props> = ({ characteristics }) => {
  return (
    <div className={styles()}>
      <h3>Характеристики</h3>
      <CharacteristicsContainer>
        {characteristics
          ? characteristics.map(
              (characteristic: ICharacteristic, index: number) => (
                <CharacteristicsItem
                  characteristic={characteristic}
                  key={index}
                />
              )
            )
          : null}
      </CharacteristicsContainer>
    </div>
  )
}

export { ProductCharacteristics }
