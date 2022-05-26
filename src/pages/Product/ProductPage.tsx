import React, { FC } from "react"
import { Container } from "../../components/Container/Container"
import { Favorite } from "../../components/Favorite/Favorite"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { Navigation } from "../../components/Navigation/Navigation"
import { ProductGallery } from "../../components/ProductGallery/ProductGallery"
import { ProductInfo } from "../../components/ProductInfo/ProductInfo"
import { ProductPrice } from "../../components/ProductPrice/ProductPrice"
import { Separator } from "../../components/Separator/Separator"
import {
  FavoriteContainer,
  MainContainer,
  ProductContainer,
  ProductId,
  styles,
  Title,
  TitleContainer,
} from "./ProductPage.styles"

const ProductPage: FC = () => {
  return (
    <>
      <div className={styles()}>
        <Header />
        <Container>
          <Navigation isAdmin={false} />
          <Separator variant="secondary" />
          <MainContainer>
            <TitleContainer>
              <Title>Умные часы Apple Watch SE, 44mm, серый космос</Title>
              <FavoriteContainer>
                <Favorite />
                <ProductId>Код товара: 649A6F5GG2</ProductId>
              </FavoriteContainer>
            </TitleContainer>
            <ProductContainer>
              <ProductGallery />
              <ProductInfo />
              <ProductPrice />
            </ProductContainer>
          </MainContainer>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export { ProductPage }
