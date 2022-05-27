import React from "react"
import { Cart } from "../../components/Cart/Cart"
import { Container } from "../../components/Container/Container"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { Navigation } from "../../components/Navigation/Navigation"
import { ProductCardHorizontal } from "../../components/ProductCardHorizonal/ProductCardHorizontal"
import { SectionTitle } from "../../components/SectionTitle/SectionTitle"
import { Separator } from "../../components/Separator/Separator"
import { CartContainer, MainContainer, Products, styles } from "./CartPage.styles"

type Props = {}

const CartPage = (props: Props) => (
  <>
    <div className={styles()}>
      <Header />
      <Container>
        <Navigation isAdmin={false} />
        <Separator variant="secondary" />
        <MainContainer>
          <SectionTitle title="Корзина" results={"Товаров в корзине — 10"} />
          <CartContainer>
            <Products>
              <ProductCardHorizontal
                title="Apple Watch Series 7 — 42mm"
                description="Корпус из алюминия цвета «сияющая звезда» и Спортивный ремешок"
                price={37900}
                id={1}
                tag="Умные часы"
                imageUrl="https://avatars.mds.yandex.net/get-mpic/18058/img_id947009900.jpeg/orig"
              />
              <Separator />
              <ProductCardHorizontal
                title="Apple Watch Series 7 — 42mm"
                description="Корпус из алюминия цвета «сияющая звезда» и Спортивный ремешок"
                price={37900}
                id={1}
                tag="Умные часы"
                imageUrl="https://avatars.mds.yandex.net/get-mpic/18058/img_id947009900.jpeg/orig"
              />
              <Separator />
              <ProductCardHorizontal
                title="Apple Watch Series 7 — 42mm"
                description="Корпус из алюминия цвета «сияющая звезда» и Спортивный ремешок"
                price={37900}
                id={1}
                tag="Умные часы"
                imageUrl="https://avatars.mds.yandex.net/get-mpic/18058/img_id947009900.jpeg/orig"
              />
            </Products>
            <Cart />
          </CartContainer>
        </MainContainer>
      </Container>
    </div>
    <Footer />
  </>
)

export { CartPage }
