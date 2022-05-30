import React, { FC } from 'react'
import { styles } from './ProductPreview.styles'

type Props = {
  imageUrl?: string,
}

const ProductPreview: FC<Props> = ({ imageUrl }) => {
  return (
    <div className={styles()}>
      <img src={imageUrl} alt="" />
    </div>
  )
}

export { ProductPreview }