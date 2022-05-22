import React, { FC } from "react"
import { Badge } from "../Badge/Badge"
import { Button } from "../Button/Button"
import { Description, Info, Preview, Price, PriceContainer, styles, Subtitle, Title } from "./Promo.styles"

type Props = {
  category?: string
  title?: string
  subtitle?: string
  description?: string
  price?: number
  url?: string
  image?: string
}

const Promo: FC<Props> = ({
  category,
  title,
  subtitle,
  description,
  price,
  url,
}) => {
  return (
    <div className={styles()}>
    <Info>
      <Badge>Планшеты</Badge>
      <div>
        <Title>iPad Mini</Title>
        <Subtitle>A15 Bionic / 256GB</Subtitle>
      </div>
      <Description>
        Дисплей Liquid Retina на всю переднюю панель. Мощный чип A15 Bionic.
        Беспроводная связь 4G LTE. Четыре превосходных цвета.
      </Description>
      <PriceContainer>
        <Button>Купить</Button>
        <Price>74 900 ₽</Price>
      </PriceContainer>
    </Info>
    <Preview />
    </div>
  )
}

export { Promo }
