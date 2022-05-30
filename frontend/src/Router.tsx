import React, { FC } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { AuthContext } from "./context/AuthContext"
import { CartPage } from "./pages/Cart/CartPage"
import { FavoritePage } from "./pages/Favorite/FavoritePage"
import { HomePage } from "./pages/Home/HomePage"
import { ProductPage } from "./pages/Product/ProductPage"
import { SearchPage } from "./pages/Search/SearchPage"

const Router: FC = () => {
  const { isLoggedContext } = React.useContext(AuthContext)
  const [isLogged] = isLoggedContext

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route
        path="/favorite"
        element={isLogged ? <FavoritePage /> : <Navigate to="/" replace />}
      />
      <Route path="/search" element={<SearchPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export { Router }
