import React from "react"
import { HomePage } from "./pages/Home/HomePage"
import { globalStyles } from "./theme"

const App = () => {
  globalStyles()

  return (
    <>
      <HomePage />
    </>
  )
}

export { App }
