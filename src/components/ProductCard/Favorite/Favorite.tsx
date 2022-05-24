import React, { FC } from 'react'
import favoriteIcon from "../../../assets/icons/favorite.svg"
import { styles } from './Favorite.styles'

const Favorite: FC = () => {
  return (
    <button className={styles()}>
      <img src={favoriteIcon} alt="favorite" />
    </button>
  )
}

export { Favorite }