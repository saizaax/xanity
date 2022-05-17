import React, { FC } from "react"
import { Container } from "../../components/Container/Container"
import { Header } from "../../components/Header/Header"
import { Categories } from "../../components/Categories/Categories"
import { MainContainer, styles } from "./HomePage.styles"
import { Navigation } from "../../components/Navigation/Navigation"
import { Separator } from "../../components/Separator/Separator"
import { Promo } from "../../components/Promo/Promo"

const HomePage: FC = () => {
  return (
    <div className={styles()}>
      <Header />
      <Container>
        <Navigation isAdmin={false} />
        <Separator variant="secondary" />
        <MainContainer>
          <Categories />
          <Promo />
        </MainContainer>
      </Container>
    </div>
  )
}

export { HomePage }
