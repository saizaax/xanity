import React, { FC } from "react"
import { Characteristic } from "../../../interfaces/characteristic.interface"
import { Key, styles, Value } from "./CharacteristicsItem.styles"

type Props = {
  characteristic: Characteristic
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
