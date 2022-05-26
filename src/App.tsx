import React from "react"
import { HomePage } from "./pages/Home/HomePage"
import { ProductPage } from "./pages/Product/ProductPage"
import { globalStyles, Wrapper } from "./theme"

const App = () => {
  globalStyles()

  return (
    <Wrapper>
      {/* <HomePage /> */}
      <ProductPage />
    </Wrapper>
  )
}

export { App }
