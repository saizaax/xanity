import React, { FC } from "react"
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
import { MainContainer, Products, styles } from "./FavoritePage.styles"

const FavoritePage: FC = () => {
  const { favoriteContext } = React.useContext(ProductsContext)
  const [favorite] = favoriteContext

  return (
    <>
      <div className={styles()}>
        <Header />
        <Container>
          <Navigation isAdmin={false} />
          <Separator variant="secondary" />
          <MainContainer>
            <SectionTitle
              title="Избранное"
              results={`Товаров в избранном — ${favorite.length}`}
            />
            <Products>
              {favorite.map(
                (product: IProduct, index: number, p: IProduct[]) => (
                  <React.Fragment key={product._id}>
                    <ProductCardHorizontal
                      title={product.name}
                      description={product.description}
                      price={product.price}
                      id={product._id}
                      tag={TAG_CONSTANTS[product.category]}
                      imageUrl={product.images[0]}
                      type="favorite"
                    />
                    {index + 1 === p.length ? null : <Separator />}
                  </React.Fragment>
                )
              )}
              {favorite.length === 0 ? (
                <p>Ваш список избранных товаров пуст</p>
              ) : null}
            </Products>
          </MainContainer>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export { FavoritePage }
