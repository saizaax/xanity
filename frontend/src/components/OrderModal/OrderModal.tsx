import React, { FC } from "react"
import { postCart, postOrder } from "../../api/products"
import { AuthContext } from "../../context/AuthContext"
import { ProductsContext } from "../../context/ProductsContext"
import { SettingsContext } from "../../context/SettingsContext"
import { IOrder, IProduct } from "../../interfaces/product.interface"
import { Button } from "../Button/Button"
import { CartItem } from "../CartItem/CartItem"
import { Input } from "../Input/Input"
import { Modal } from "../Modal/Modal"
import { Select } from "../Select/Select"
import { Separator } from "../Separator/Separator"
import {
  InputContainer,
  Products,
  Selectors,
  styles,
  SelectorContainer,
  Title,
  ActionsContainer,
} from "./OrderModal.styles"

type Props = {}

const OrderModal: FC<Props> = () => {
  const { cartContext } = React.useContext(ProductsContext)
  const { settingsContext } = React.useContext(SettingsContext)
  const { tokenContext } = React.useContext(AuthContext)

  const [settings, setSettings] = settingsContext
  const [token] = tokenContext
  const [cart, setCart] = cartContext

  const [name, setName] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [city, setCity] = React.useState("")
  const [address, setAddress] = React.useState("")
  const [hours, setHours] = React.useState("")

  const handleOrder = async () => {
    const payload: IOrder = {
      products: cart.map((product: IProduct) => product._id),
      time: Number(`${+new Date()}`),
      customer: name,
      phone: phone,
      city: city,
      address: address,
      payment: "Наличными",
      interval: hours,
      status: "active",
    }

    if (name && phone && city && address && hours) {
      try {
        const res = await postOrder(payload, token)
        if (res) {
          await postCart([], token)
          setCart([])
          setSettings({ ...settings, orderModal: false })
        }
      } catch (err) {
        console.error(err)
      }
    }
  }

  return (
    <>
      {settings.orderModal ? (
        <Modal
          size="large"
          onClose={() => setSettings({ ...settings, orderModal: false })}
        >
          <div className={styles()}>
            <h2>Оформление заказа</h2>
            <Products>
              {cart.map((product: IProduct) => (
                <CartItem
                  title={product.name}
                  price={product.price}
                  key={product._id}
                />
              ))}
              <CartItem
                title="Итого"
                price={cart
                  .map((product: IProduct) => product.price)
                  .reduce((prev: number, curr: number) => prev + curr, 0)}
                color="primary"
              />
            </Products>
            <Separator />
            <InputContainer>
              <Input
                size="default"
                placeholder="Введите ФИО"
                label="ФИО"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                size="default"
                placeholder="Введите номер телефона"
                label="Номер телефона"
                onChange={(e) => setPhone(e.target.value)}
              />
              <Input
                size="default"
                placeholder="Введите город"
                label="Город"
                onChange={(e) => setCity(e.target.value)}
              />
              <Input
                size="default"
                placeholder="Введите адрес доставки"
                label="Адрес доставки"
                onChange={(e) => setAddress(e.target.value)}
              />
              <Input
                size="default"
                placeholder="Введите удобное время доставки"
                label="Время доставки"
                onChange={(e) => setHours(e.target.value)}
              />
            </InputContainer>
            <SelectorContainer>
              <Title>Способ оплаты</Title>
              <Selectors>
                <Select type="primary">Наличными</Select>
              </Selectors>
            </SelectorContainer>
            <ActionsContainer>
              <Button
                size="small"
                color="border"
                onClick={() => setSettings({ ...settings, orderModal: false })}
              >
                Отмена
              </Button>
              <Button size="small" onClick={handleOrder}>
                Оформить заказ
              </Button>
            </ActionsContainer>
          </div>
        </Modal>
      ) : null}
    </>
  )
}

export { OrderModal }
