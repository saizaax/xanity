import React, { FC } from "react"
import watchImage from "../../assets/watch.webp"
import { Button } from "../Button/Button"
import { ProductCardPreview } from "./Preview/ProductCardPreview"
import { Description, DescriptionContainer, Price, PriceContainer, styles, Title } from "./ProductCard.styles"

type Props = {
  title: string
  description: string
  price: number
  tag: string
  id: number
  imageUrl: string
}

const ProductCard: FC<Props> = ({
  title,
  description,
  price,
  tag,
  id,
  imageUrl,
}) => {
  return (
    <div className={styles()}>
      <ProductCardPreview imageUrl={watchImage} tag={tag} />
      <DescriptionContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <PriceContainer>
          <Price>{price.toLocaleString()} ₽</Price>
          <Button color="secondary" size="small">Купить</Button>
        </PriceContainer>
      </DescriptionContainer>
    </div>
  )
}

export { ProductCard }
