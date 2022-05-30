import React from "react"
import { Cart } from "../../components/Cart/Cart"
import { Container } from "../../components/Container/Container"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { Navigation } from "../../components/Navigation/Navigation"
import { ProductCardHorizontal } from "../../components/ProductCardHorizonal/ProductCardHorizontal"
import { SectionTitle } from "../../components/SectionTitle/SectionTitle"
import { Separator } from "../../components/Separator/Separator"
import { ProductsContext } from "../../context/ProductsContext"
import { IProduct } from "../../interfaces/product.interface"
import { TAG_CONSTANTS } from "../../constants/TagConstants"
import {
  CartContainer,
  MainContainer,
  Products,
  styles,
} from "./CartPage.styles"

type Props = {}

const CartPage = (props: Props) => {
  const { cartContext } = React.useContext(ProductsContext)
  const [cart] = cartContext

  return (
    <>
      <div className={styles()}>
        <Header />
        <Container>
          <Navigation isAdmin={false} />
          <Separator variant="secondary" />
          <MainContainer>
            <SectionTitle
              title="Корзина"
              results={`Товаров в корзине — ${cart.length}`}
            />
            <CartContainer>
              <Products>
                {cart.map((product: IProduct, index: number, p: IProduct[]) => (
                  <React.Fragment key={product._id}>
                    <ProductCardHorizontal
                      title={product.name}
                      description={product.description}
                      price={product.price}
                      id={product._id}
                      tag={TAG_CONSTANTS[product.category]}
                      imageUrl={product.images[0]}
                      type="cart"
                    />
                    {index + 1 === p.length ? null : <Separator />}
                  </React.Fragment>
                ))}
                {cart.length === 0 ? <p>Ваша корзина пуста</p> : null}
              </Products>
              <Cart cart={cart} />
            </CartContainer>
          </MainContainer>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export { CartPage }
