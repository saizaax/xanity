import React, { useState, createContext, FC } from "react"
import { getCart, getFavorite, getProducts } from "../api/products"
import { IProduct } from "../interfaces/product.interface"
import { AuthContext } from "./AuthContext"

export const ProductsContext = createContext<any>(undefined)

type Props = {
  children: React.ReactNode
}

export const ProductsProvider: FC<Props> = ({ children }) => {
  const { isLoggedContext, tokenContext } = React.useContext(AuthContext)
  const [token] = tokenContext
  
  const [isLogged] = isLoggedContext
  const [products, setProducts] = useState<Array<IProduct>>([])
  const [favorite, setFavorite] = useState<Array<IProduct>>([])
  const [cart, setCart] = useState<Array<IProduct>>([])

  React.useEffect(() => {
    const fetchData = async () => {
      /** Favorite **/
      const favoritePayload = await getFavorite(token)

      if (favoritePayload !== undefined) {
        setFavorite(favoritePayload)
      }

      /** Cart **/
      const cartPayload = await getCart(token)

      if (cartPayload !== undefined) {
        setCart(cartPayload)
      }

      /** Products **/
      const productsPayload = await getProducts()

      if (productsPayload !== undefined) {
        setProducts(productsPayload)
      }
    }

    fetchData().catch(console.error)
  }, [setProducts, token, isLogged])

  return (
    <ProductsContext.Provider value={{
      productsContext: [products, setProducts],
      favoriteContext: [favorite, setFavorite],
      cartContext: [cart, setCart],
    }}>
      {children}
    </ProductsContext.Provider>
  )
}
