import React from "react"
import { BrowserRouter } from "react-router-dom"
import { globalStyles, Wrapper } from "./theme"
import { AuthProvider } from "./context/AuthContext"
import { SettingsProvider } from "./context/SettingsContext"
import { SignUpModal } from "./components/SignUpModal/SignUpModal"
import { OrderModal } from "./components/OrderModal/OrderModal"
import { SignInModal } from "./components/SignInModal/SignInModal"
import { Router } from "./Router"
import { ProductsProvider } from "./context/ProductsContext"

const App = () => {
  globalStyles()

  return (
    <SettingsProvider>
      <AuthProvider>
        <ProductsProvider>
          <Wrapper>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
            <SignInModal />
            <SignUpModal />
            <OrderModal />
          </Wrapper>
        </ProductsProvider>
      </AuthProvider>
    </SettingsProvider>
  )
}

export { App }
