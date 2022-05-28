import React, { FC } from "react"
import { Container } from "../../components/Container/Container"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { Navigation } from "../../components/Navigation/Navigation"
import { ProductCardHorizontal } from "../../components/ProductCardHorizonal/ProductCardHorizontal"
import { SectionTitle } from "../../components/SectionTitle/SectionTitle"
import { Separator } from "../../components/Separator/Separator"
import { MainContainer, Products, styles } from "./FavoritePage.styles"

const FavoritePage: FC = () => {
  return (
    <>
      <div className={styles()}>
        <Header />
        <Container>
          <Navigation isAdmin={false} />
          <Separator variant="secondary" />
          <MainContainer>
            <SectionTitle title="Избранное" results={"Товаров в избранном — 3"} />
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
          </MainContainer>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export { FavoritePage }
