import React from "react"
import { HomePage } from "./pages/Home/HomePage"
import { globalStyles, Wrapper } from "./theme"

const App = () => {
  globalStyles()

  return (
    <Wrapper>
      <HomePage />
    </Wrapper>
  )
}

export { App }
