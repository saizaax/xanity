import React, { FC } from "react"
import { Link } from "react-router-dom"
import { postCart } from "../../api/products"
import { AuthContext } from "../../context/AuthContext"
import { ProductsContext } from "../../context/ProductsContext"
import { SettingsContext } from "../../context/SettingsContext"
import { IProduct } from "../../interfaces/product.interface"
import { Button } from "../Button/Button"
import { ProductCardPreview } from "./Preview/ProductCardPreview"
import {
  Description,
  DescriptionContainer,
  Price,
  PriceContainer,
  styles,
  Title,
  TitleContainer,
} from "./ProductCard.styles"

type Props = {
  title: string
  description: string
  price: number
  tag: string
  id: string
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
  const { tokenContext, isLoggedContext } = React.useContext(AuthContext)
  const { cartContext, productsContext } = React.useContext(ProductsContext)
  const { settingsContext } = React.useContext(SettingsContext)

  const [settings, setSettings] = settingsContext
  const [isLogged] = isLoggedContext
  const [token] = tokenContext
  const [products] = productsContext
  const [cart, setCart] = cartContext

  const getIsInCart = (id: string) =>
    cart.filter((product: IProduct) => product._id === id).length > 0

  const [isInCart, setIsInCart] = React.useState(getIsInCart(id))

  const addToCart = async () => {
    const cartIds = [...cart.map((product: IProduct) => product._id), id]

    try {
      const res = await postCart(cartIds, token)
      if (res) {
        const newCart = [
          ...cart,
          products.find((product: IProduct) => product._id === id),
        ]
        setCart(newCart)
        setIsInCart(true)
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
        setIsInCart(false)
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className={styles()}>
      <ProductCardPreview imageUrl={imageUrl} tag={tag} id={id} />
      <DescriptionContainer>
        <TitleContainer>
          <Link to={`/product/${id}`}>
            <Title>{title}</Title>
          </Link>
          <Description>{description}</Description>
        </TitleContainer>
        <PriceContainer>
          <Price>{price.toLocaleString()} ₽</Price>
          {isInCart ? (
            <Button size="small" onClick={removeFromCart}>
              В корзине
            </Button>
          ) : (
            <Button
              color="secondary"
              size="small"
              onClick={
                isLogged
                  ? addToCart
                  : () => setSettings({ ...settings, signInModal: true })
              }
            >
              Купить
            </Button>
          )}
        </PriceContainer>
      </DescriptionContainer>
    </div>
  )
}

export { ProductCard }
