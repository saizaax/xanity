import React, { FC } from 'react'
import { Favorite } from '../Favorite/Favorite'
import { ProductCardTag } from '../Tag/ProductCardTag'
import { styles } from './ProductCardPreview.styles'

type Props = {
  imageUrl: string,
  tag: string,
  id: string,
}

const ProductCardPreview: FC<Props> = ({ imageUrl, tag, id }) => {
  return (
    <div className={styles()}>
      <img src={imageUrl} alt="" />
      <ProductCardTag>{tag}</ProductCardTag>
      <Favorite id={id} />
    </div>
  )
}

export { ProductCardPreview }