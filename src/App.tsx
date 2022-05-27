import React from "react"
import { CartPage } from "./pages/Cart/CartPage"
import { globalStyles, Wrapper } from "./theme"
// import { HomePage } from "./pages/Home/HomePage"
// import { ProductPage } from "./pages/Product/ProductPage"
// import { SearchPage } from "./pages/Search/SearchPage"

const App = () => {
  globalStyles()

  return (
    <Wrapper>
      {/* <HomePage /> */}
      {/* <ProductPage /> */}
      {/* <SearchPage /> */}
      <CartPage />
    </Wrapper>
  )
}

export { App }
