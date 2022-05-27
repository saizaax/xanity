import React, { FC } from "react"
import watchImage from "../../assets/watch.webp"
import { Button } from "../Button/Button"
import { ProductCardHorizontalPreview } from "./Preview/ProductCardHorizontalPreview"
import { Description, DescriptionContainer, Price, PriceContainer, styles, Title } from "./ProductCardHorizontal.styles"

type Props = {
  title: string
  description: string
  price: number
  tag: string
  id: number
  imageUrl: string
}

const ProductCardHorizontal: FC<Props> = ({
  title,
  description,
  price,
  tag,
  id,
  imageUrl,
}) => {
  return (
    <div className={styles()}>
      <ProductCardHorizontalPreview imageUrl={watchImage} tag={tag} />
      <DescriptionContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <PriceContainer>
          <Price>{price.toLocaleString()} ₽</Price>
          <Button color="danger" size="small">Удалить</Button>
        </PriceContainer>
      </DescriptionContainer>
    </div>
  )
}

export { ProductCardHorizontal }
