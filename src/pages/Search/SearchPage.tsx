import React, { FC } from "react"
import { Container } from "../../components/Container/Container"
import { Filters } from "../../components/Filters/Filters"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { Navigation } from "../../components/Navigation/Navigation"
import { ProductCard } from "../../components/ProductCard/ProductCard"
import { SectionTitle } from "../../components/SectionTitle/SectionTitle"
import { Separator } from "../../components/Separator/Separator"
import {
  MainContainer,
  Products,
  ProductsContainer,
  styles,
} from "./SearchPage.styles"

const SearchPage: FC = () => {
  return (
    <>
      <div className={styles()}>
        <Header />
        <Container>
          <Navigation isAdmin={false} />
          <Separator variant="secondary" />
          <MainContainer>
            <SectionTitle title="Поиск товаров" results={"Найдено результатов — 10"} />
            <ProductsContainer>
              <Filters />
              <Products>
                <ProductCard
                  title="Apple Watch Series 7 — 42mm"
                  description="Корпус из алюминия цвета «сияющая звезда» и Спортивный ремешок"
                  price={37900}
                  id={1}
                  tag="Умные часы"
                  imageUrl="https://avatars.mds.yandex.net/get-mpic/18058/img_id947009900.jpeg/orig"
                />
                <ProductCard
                  title="Apple Watch Series 7 — 42mm"
                  description="Корпус из алюминия цвета «сияющая звезда» и Спортивный ремешок"
                  price={37900}
                  id={1}
                  tag="Умные часы"
                  imageUrl="https://avatars.mds.yandex.net/get-mpic/18058/img_id947009900.jpeg/orig"
                />
                <ProductCard
                  title="Apple Watch Series 7 — 42mm"
                  description="Корпус из алюминия цвета «сияющая звезда» и Спортивный ремешок"
                  price={37900}
                  id={1}
                  tag="Умные часы"
                  imageUrl="https://avatars.mds.yandex.net/get-mpic/18058/img_id947009900.jpeg/orig"
                />
                <ProductCard
                  title="Apple Watch Series 7 — 42mm"
                  description="Корпус из алюминия цвета «сияющая звезда» и Спортивный ремешок"
                  price={37900}
                  id={1}
                  tag="Умные часы"
                  imageUrl="https://avatars.mds.yandex.net/get-mpic/18058/img_id947009900.jpeg/orig"
                />
                <ProductCard
                  title="Apple Watch Series 7 — 42mm"
                  description="Корпус из алюминия цвета «сияющая звезда» и Спортивный ремешок"
                  price={37900}
                  id={1}
                  tag="Умные часы"
                  imageUrl="https://avatars.mds.yandex.net/get-mpic/18058/img_id947009900.jpeg/orig"
                />
                <ProductCard
                  title="Apple Watch Series 7 — 42mm"
                  description="Корпус из алюминия цвета «сияющая звезда» и Спортивный ремешок"
                  price={37900}
                  id={1}
                  tag="Умные часы"
                  imageUrl="https://avatars.mds.yandex.net/get-mpic/18058/img_id947009900.jpeg/orig"
                />
              </Products>
            </ProductsContainer>
          </MainContainer>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export { SearchPage }
