import React, { FC } from "react"
import { ICharacteristic } from "../../../interfaces/product.interface"
import { Key, styles, Value } from "./CharacteristicsItem.styles"

type Props = {
  characteristic: ICharacteristic
}

const CharacteristicsItem: FC<Props> = ({ characteristic }) => {
  return (
    <div className={styles()}>
      <Key>{characteristic.key}:</Key>
      <hr />
      <Value>{characteristic.value}</Value>
    </div>
  )
}

export { CharacteristicsItem }
