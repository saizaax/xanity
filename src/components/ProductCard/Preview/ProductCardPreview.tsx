import React, { FC } from 'react'
import { Favorite } from '../Favorite/Favorite'
import { ProductCardTag } from '../Tag/ProductCardTag'
import { styles } from './ProductCardPreview.styles'

type Props = {
  imageUrl: string,
  tag: string,
}

const ProductCardPreview: FC<Props> = ({ imageUrl, tag }) => {
  return (
    <div className={styles()}>
      <img src={imageUrl} alt="" />
      <ProductCardTag>{tag}</ProductCardTag>
      <Favorite />
    </div>
  )
}

export { ProductCardPreview }