import React, { FC } from 'react'
import { styles } from './ProductCardHorizontalPreview.styles'

type Props = {
  imageUrl: string,
  tag: string,
}

const ProductCardHorizontalPreview: FC<Props> = ({ imageUrl, tag }) => {
  return (
    <div className={styles()}>
      <img src={imageUrl} alt="" />
    </div>
  )
}

export { ProductCardHorizontalPreview }