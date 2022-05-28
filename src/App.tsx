import React from "react"
import { globalStyles, Wrapper } from "./theme"
// import { SignInModal } from "./components/SignInModal/SignInModal"
// import { SearchPage } from "./pages/Search/SearchPage"
// import { HomePage } from "./pages/Home/HomePage"
// import { ProductPage } from "./pages/Product/ProductPage"
// import { SignUpModal } from "./components/SignUpModal/SignUpModal"
// import { FavoritePage } from "./pages/Favorite/FavoritePage"
import { CartPage } from "./pages/Cart/CartPage"
import { OrderModal } from "./components/OrderModal/OrderModal"

const App = () => {
  globalStyles()

  return (
    <>
      <Wrapper>
        {/* <HomePage /> */}
        {/* <ProductPage /> */}
        <CartPage />
        {/* <FavoritePage /> */}
        {/* <SearchPage /> */}
      </Wrapper>
      {/* <SignInModal /> */}
      {/* <SignUpModal /> */}
      <OrderModal />
    </>
  )
}

export { App }
