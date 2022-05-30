import React, { FC } from "react"
import { Button } from "../Button/Button"
import { Price } from "./Price/Price"
import { OrderContainer, styles } from "./ProductPrice.styles"

import clockIcon from "../../assets/icons/clock.svg"
import { SettingsContext } from "../../context/SettingsContext"
import { ProductsContext } from "../../context/ProductsContext"
import { AuthContext } from "../../context/AuthContext"
import { IProduct } from "../../interfaces/product.interface"
import { postCart } from "../../api/products"

type Props = {
  price: number
  id: string
}

const ProductPrice: FC<Props> = ({ price, id }) => {
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
      <Price price={price} />
      <OrderContainer>
        {isInCart ? (
          <Button size="small" color="secondary" onClick={removeFromCart}>
            В корзине
          </Button>
        ) : (
          <Button
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
        {/* <Button size="small">В корзину</Button> */}
        <p>
          <img src={clockIcon} alt="" /> Доставка от 1 до 3 дней
        </p>
      </OrderContainer>
    </div>
  )
}

export { ProductPrice }
