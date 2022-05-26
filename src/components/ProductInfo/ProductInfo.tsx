import React, { FC } from "react"
import { Characteristic } from "../../interfaces/characteristic.interface"
import { ProductCharacteristics } from "../ProductCharacteristics/ProductCharacteristics"
import { ProductDescription } from "../ProductDescription/ProductDescription"
import { styles } from "./ProductInfo.styles"

type Props = {
  description?: string
  characteristics?: Characteristic[]
}

// Delete
const desc =
  "Мощные функции, с которыми ещё проще вести активный образ жизни, следить за здоровьем, оставаться на связи и чувствовать себя в безопасности. Передовые датчики, которые отслеживают все виды физической активности и показатели ваших любимых тренировок. Apple Watch SE — часы, с которыми вы оцените каждую секунду."

const charcs = [
  { key: "Цвет", value: "Серый космос" },
  { key: "Цвет", value: "Серый космос" },
  { key: "Цвет", value: "Серый космос" },
  { key: "Цвет", value: "Серый космос" },
  { key: "Цвет", value: "Серый космос" },
  { key: "Цвет", value: "Серый космос" },
]

const ProductInfo: FC<Props> = ({ description, characteristics }) => {
  return (
    <div className={styles()}>
      <ProductDescription description={desc} />
      <ProductCharacteristics characteristics={charcs} />
    </div>
  )
}

export { ProductInfo }
