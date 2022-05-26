import React from "react"
import { SearchPage } from "./pages/Search/SearchPage"
import { globalStyles, Wrapper } from "./theme"
// import { HomePage } from "./pages/Home/HomePage"
// import { ProductPage } from "./pages/Product/ProductPage"

const App = () => {
  globalStyles()

  return (
    <Wrapper>
      {/* <HomePage /> */}
      {/* <ProductPage /> */}
      <SearchPage />
    </Wrapper>
  )
}

export { App }
