import React, { FC } from "react"
import { Link } from "react-router-dom"
import { Badge } from "../Badge/Badge"
import { Button } from "../Button/Button"
import {
  Description,
  Info,
  Preview,
  Price,
  PriceContainer,
  styles,
  Subtitle,
  Title,
} from "./Promo.styles"

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
          <Link to={`/product/62954a3719eae503ff145d38`}>
            <Button>Подробнее</Button>
          </Link>
          <Price>74 900 ₽</Price>
        </PriceContainer>
      </Info>
      <Preview />
    </div>
  )
}

export { Promo }
