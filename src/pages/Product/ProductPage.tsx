import React, { FC } from "react"
import { useLocation } from "react-router-dom"
import { getProductById } from "../../api/products"
import { Container } from "../../components/Container/Container"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { Navigation } from "../../components/Navigation/Navigation"
import { ProductGallery } from "../../components/ProductGallery/ProductGallery"
import { ProductInfo } from "../../components/ProductInfo/ProductInfo"
import { ProductPrice } from "../../components/ProductPrice/ProductPrice"
import { Separator } from "../../components/Separator/Separator"
import { IProduct } from "../../interfaces/product.interface"
import {
  MainContainer,
  ProductContainer,
  styles,
  Title,
  TitleContainer,
} from "./ProductPage.styles"

const ProductPage: FC = () => {
  const location = useLocation()
  const [product, setProduct] = React.useState<IProduct>({} as IProduct)

  const productId = location.pathname.split("/")[2]

  React.useEffect(() => {
    const fetchData = async () => {
      const productPayload = await getProductById(productId)

      if (productPayload !== undefined) {
        setProduct(productPayload)
      }
    }

    fetchData().catch(console.error)
  }, [location, productId])

  return (
    <>
      <div className={styles()}>
        <Header />
        <Container>
          <Navigation isAdmin={false} />
          <Separator variant="secondary" />
          <MainContainer>
            <TitleContainer>
              <Title>{product.name}</Title>
            </TitleContainer>
            <ProductContainer>
              <ProductGallery imageUrls={product.images} />
              <ProductInfo
                description={product.description}
                characteristics={product.characteristics}
              />
              <ProductPrice price={product.price} id={productId} />
            </ProductContainer>
          </MainContainer>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export { ProductPage }
