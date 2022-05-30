import React, { FC } from "react"
import { AuthContext } from "../../context/AuthContext"
import { SettingsContext } from "../../context/SettingsContext"
import { IProduct } from "../../interfaces/product.interface"
import { Button } from "../Button/Button"
import { CartItem } from "../CartItem/CartItem"
import {
  CartContainer,
  styles,
  Title,
  Total,
  TotalContainer,
} from "./Cart.styles"

type Props = {
  cart: IProduct[]
}

const Cart: FC<Props> = ({ cart }) => {
  const { isLoggedContext } = React.useContext(AuthContext)
  const { settingsContext } = React.useContext(SettingsContext)

  const [settings, setSettings] = settingsContext
  const [isLogged] = isLoggedContext

  return (
    <>
      {cart.length ? (
        <div className={styles()}>
          <CartContainer>
            <Title>Итого</Title>
            {cart.map((product: IProduct) => (
              <CartItem
                title={product.name}
                price={product.price}
                key={product._id}
              />
            ))}
          </CartContainer>
          <TotalContainer>
            <Total>
              {cart
                .map((product: IProduct) => product.price)
                .reduce((prev: number, curr: number) => prev + curr, 0)
                .toLocaleString() + " ₽"}
            </Total>
            <Button
              size="small"
              onClick={
                isLogged
                  ? () => setSettings({ ...settings, orderModal: true })
                  : () => setSettings({ ...settings, signInModal: true })
              }
            >
              Оформить
            </Button>
          </TotalContainer>
        </div>
      ) : null}
    </>
  )
}

export { Cart }
