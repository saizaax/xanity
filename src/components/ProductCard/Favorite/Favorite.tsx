import React, { FC } from "react"
import { ProductsContext } from "../../../context/ProductsContext"
import { styles } from "./Favorite.styles"
import { IProduct } from "../../../interfaces/product.interface"

import favoriteIcon from "../../../assets/icons/favorite.svg"
import favoriteFillIcon from "../../../assets/icons/favorite-fill.svg"
import { postFavorite } from "../../../api/products"
import { AuthContext } from "../../../context/AuthContext"

type Props = {
  id: string
}

const Favorite: FC<Props> = ({ id }) => {
  const { tokenContext } = React.useContext(AuthContext)
  const { favoriteContext, productsContext } = React.useContext(ProductsContext)

  const [token] = tokenContext
  const [products] = productsContext
  const [favorite, setFavorite] = favoriteContext

  const getIsFavorite = (id: string) =>
    favorite.filter((product: IProduct) => product._id === id).length > 0

  const [isFavorite, setIsFavorite] = React.useState(getIsFavorite(id))

  const addToFavorite = async () => {
    const favoriteIds = [
      ...favorite.map((product: IProduct) => product._id),
      id,
    ]

    try {
      const res = await postFavorite(favoriteIds, token)
      if (res) {
        const newFavorite = [
          ...favorite,
          products.find((product: IProduct) => product._id === id),
        ]
        setFavorite(newFavorite)
        setIsFavorite(true)
      }
    } catch (err) {
      console.error(err)
    }
  }

  const removeFromFavorite = async () => {
    const favoriteIds = favorite.map((product: IProduct) => product._id).filter((i: string) => i !== id)

    try {
      const res = await postFavorite(favoriteIds, token)
      if (res) {
        const newFavorite = favorite.filter(
          (product: IProduct) => product._id !== id
        )
        setFavorite(newFavorite)
        setIsFavorite(false)
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <button
      className={styles()}
      onClick={isFavorite ? removeFromFavorite : addToFavorite}
    >
      {isFavorite ? (
        <img src={favoriteFillIcon} alt="favorite" />
      ) : (
        <img src={favoriteIcon} alt="favorite" />
      )}
    </button>
  )
}

export { Favorite }
