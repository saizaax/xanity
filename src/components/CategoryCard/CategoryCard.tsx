import React, { FC } from "react"
import { Link } from "react-router-dom"
import { Info, InfoContainer, Price, styles } from "./CategoryCard.styles"
import { CategoryCardPreview } from "./Preview/CategoryCardPreview"

type Props = {
  title: string
  amount: number
  startPrice: number
  imageUrl: string
}

const CategoryCard: FC<Props> = ({ title, amount, startPrice, imageUrl }) => {
  return (
    <Link to="/search">
      <div className={styles()}>
        <InfoContainer>
          <Info>
            <h3>{title}</h3>
            <p>{amount} моделей</p>
          </Info>
          <Price>от {startPrice.toLocaleString()} ₽</Price>
        </InfoContainer>
        <CategoryCardPreview url={imageUrl} />
      </div>
    </Link>
  )
}

export { CategoryCard }
