import React, { FC } from "react"
import { useLocation } from "react-router-dom"
import { Container } from "../../components/Container/Container"
import { Filters } from "../../components/Filters/Filters"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { Navigation } from "../../components/Navigation/Navigation"
import { ProductCard } from "../../components/ProductCard/ProductCard"
import { SectionTitle } from "../../components/SectionTitle/SectionTitle"
import { Separator } from "../../components/Separator/Separator"
import { TAG_CONSTANTS } from "../../constants/TagConstants"
import { ProductsContext } from "../../context/ProductsContext"
import { IProduct } from "../../interfaces/product.interface"
import {
  MainContainer,
  Products,
  ProductsContainer,
  styles,
} from "./SearchPage.styles"

const SearchPage: FC = () => {
  const location = useLocation()

  const { productsContext } = React.useContext(ProductsContext)
  const [products] = productsContext

  const [filtered, setFiltered] = React.useState<Array<IProduct>>([])

  React.useEffect(() => {
    const query = decodeURI(location.search.split("=")[1])

    if (query !== undefined && query !== "") {
      const filteredProducts = products.filter(
        (product: IProduct) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase())
      )
      setFiltered(filteredProducts)
    }
  }, [location, products])

  return (
    <>
      <div className={styles()}>
        <Header />
        <Container>
          <Navigation isAdmin={false} />
          <Separator variant="secondary" />
          <MainContainer>
            <SectionTitle
              title="Поиск товаров"
              results={"Найдено результатов — 10"}
            />
            <ProductsContainer>
              <Filters />
              <Products>
                {filtered.length > 0
                  ? filtered.map((product: IProduct) => (
                      <ProductCard
                        key={product._id}
                        title={product.name}
                        description={product.description}
                        price={product.price}
                        id={product._id}
                        tag={TAG_CONSTANTS[product.category]}
                        imageUrl={product.images[0]}
                      />
                    ))
                  : products.map((product: IProduct) => (
                      <ProductCard
                        key={product._id}
                        title={product.name}
                        description={product.description}
                        price={product.price}
                        id={product._id}
                        tag={TAG_CONSTANTS[product.category]}
                        imageUrl={product.images[0]}
                      />
                    ))}
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
