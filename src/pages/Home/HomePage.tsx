import React, { FC } from "react"
import { Container } from "../../components/Container/Container"
import { Header } from "../../components/Header/Header"
import { Categories } from "../../components/Categories/Categories"
import {
  CategoryContainer,
  MainContainer,
  ProductCardContainer,
  PromoContainer,
  styles,
} from "./HomePage.styles"
import { Navigation } from "../../components/Navigation/Navigation"
import { Separator } from "../../components/Separator/Separator"
import { Promo } from "../../components/Promo/Promo"
import { CategoryCard } from "../../components/CategoryCard/CategoryCard"

import laptopsPreview from "../../assets/categories/laptops.png"
import smartphonesPreview from "../../assets/categories/smartphones.png"
import headphonesPreview from "../../assets/categories/headphones.png"
import watchesPreview from "../../assets/categories/watches.png"
import tabletsPreview from "../../assets/categories/tablets.png"
import computersPreview from "../../assets/categories/computers.png"
import tvsPreview from "../../assets/categories/tvs.png"
import audiosPreview from "../../assets/categories/audios.png"
import { ProductCard } from "../../components/ProductCard/ProductCard"
import { Footer } from "../../components/Footer/Footer"

const HomePage: FC = () => {
  return (
    <>
      <div className={styles()}>
        <Header />
        <Container>
          <Navigation isAdmin={false} />
          <Separator variant="secondary" />
          <MainContainer>
            <Categories />
            <PromoContainer>
              <Promo />
              <CategoryContainer>
                <CategoryCard
                  title="Ноутбуки"
                  amount={613}
                  startPrice={27900}
                  imageUrl={laptopsPreview}
                />
                <CategoryCard
                  title="Смартфоны"
                  amount={241}
                  startPrice={13700}
                  imageUrl={smartphonesPreview}
                />
                <CategoryCard
                  title="Наушники"
                  amount={213}
                  startPrice={4200}
                  imageUrl={headphonesPreview}
                />
                <CategoryCard
                  title="Умные часы"
                  amount={66}
                  startPrice={12200}
                  imageUrl={watchesPreview}
                />
                <CategoryCard
                  title="Планшеты"
                  amount={88}
                  startPrice={15800}
                  imageUrl={tabletsPreview}
                />
                <CategoryCard
                  title="Моноблоки"
                  amount={59}
                  startPrice={37400}
                  imageUrl={computersPreview}
                />
                <CategoryCard
                  title="TV"
                  amount={76}
                  startPrice={22300}
                  imageUrl={tvsPreview}
                />
                <CategoryCard
                  title="Колонки"
                  amount={158}
                  startPrice={6600}
                  imageUrl={audiosPreview}
                />
              </CategoryContainer>
              <ProductCardContainer>
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
              </ProductCardContainer>
            </PromoContainer>
          </MainContainer>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export { HomePage }
