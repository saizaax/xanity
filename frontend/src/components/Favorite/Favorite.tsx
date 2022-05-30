import React, { FC } from "react"
import { styles } from "./Favorite.styles"

import favoriteIcon from "../../assets/icons/favorite.svg"

type Props = {
  onClick?: () => void
}

const Favorite: FC<Props> = ({ onClick }) => {
  return (
    <button className={styles()}>
      <img src={favoriteIcon} alt="" /> В избранное
    </button>
  )
}

export { Favorite }
