import React from "react"
import { Characteristic } from "../../interfaces/characteristic.interface"
import { CharacteristicsItem } from "./CharacteristicsItem/CharacteristicsItem"
import {
  CharacteristicsContainer,
  styles,
} from "./ProductCharacteristics.styles"

type Props = {
  characteristics: Characteristic[]
}

const ProductCharacteristics = (props: Props) => {
  return (
    <div className={styles()}>
      <h3>Характеристики</h3>
      <CharacteristicsContainer>
        {props.characteristics.map((characteristic, index) => (
          <CharacteristicsItem characteristic={characteristic} key={index} />
        ))}
      </CharacteristicsContainer>
    </div>
  )
}

export { ProductCharacteristics }
