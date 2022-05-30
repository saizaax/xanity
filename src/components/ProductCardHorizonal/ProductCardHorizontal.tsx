import React, { FC } from "react"
import { Link } from "react-router-dom"
import { postCart, postFavorite } from "../../api/products"
import { AuthContext } from "../../context/AuthContext"
import { ProductsContext } from "../../context/ProductsContext"
import { IProduct } from "../../interfaces/product.interface"
import { Button } from "../Button/Button"
import { ProductCardHorizontalPreview } from "./Preview/ProductCardHorizontalPreview"
import {
  Description,
  DescriptionContainer,
  Price,
  PriceContainer,
  styles,
  Title,
} from "./ProductCardHorizontal.styles"

type Props = {
  title: string
  description: string
  price: number
  tag: string
  id: string
  imageUrl: string
  type: "cart" | "favorite"
}

const ProductCardHorizontal: FC<Props> = ({
  title,
  description,
  price,
  tag,
  id,
  imageUrl,
  type,
}) => {
  const { tokenContext } = React.useContext(AuthContext)
  const { favoriteContext, cartContext } = React.useContext(ProductsContext)

  const [token] = tokenContext
  const [favorite, setFavorite] = favoriteContext
  const [cart, setCart] = cartContext

  const removeFromFavorite = async () => {
    const favoriteIds = favorite
      .map((product: IProduct) => product._id)
      .filter((i: string) => i !== id)

    try {
      const res = await postFavorite(favoriteIds, token)
      if (res) {
        const newFavorite = favorite.filter(
          (product: IProduct) => product._id !== id
        )
        setFavorite(newFavorite)
      }
    } catch (err) {
      console.error(err)
    }
  }

  const removeFromCart = async () => {
    const cartIds = cart
      .map((product: IProduct) => product._id)
      .filter((i: string) => i !== id)

    try {
      const res = await postCart(cartIds, token)
      if (res) {
        const newCart = cart.filter((product: IProduct) => product._id !== id)
        setCart(newCart)
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className={styles()}>
      <ProductCardHorizontalPreview imageUrl={imageUrl} tag={tag} />
      <DescriptionContainer>
        <Link to={`/product/${id}`}><Title>{title}</Title></Link>
        <Description>{description}</Description>
        <PriceContainer>
          <Price>{price.toLocaleString()} ₽</Price>
          <Button
            color="danger"
            size="small"
            onClick={type === "favorite" ? removeFromFavorite : removeFromCart}
          >
            Удалить
          </Button>
        </PriceContainer>
      </DescriptionContainer>
    </div>
  )
}

export { ProductCardHorizontal }
