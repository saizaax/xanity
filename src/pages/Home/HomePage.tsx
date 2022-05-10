import React, { FC } from "react"
import { Container } from "../../components/Container/Container"
import { Header } from "../../components/Header/Header"
import { Categories } from "../../components/Categories/Categories"
import { styles } from "./HomePage.styles"
import { Navigation } from "../../components/Navigation/Navigation"
import { Separator } from "../../components/Separator/Separator"

const HomePage: FC = () => {
  return (
    <div className={styles()}>
      <Header />
      <Container>
        <Navigation isAdmin={false} />
        <Separator variant="secondary" />
        <Categories />
      </Container>
    </div>
  )
}

export { HomePage }
