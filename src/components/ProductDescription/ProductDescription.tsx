import React, { FC } from 'react'
import { styles } from './ProductDescription.styles'

type Props = {
  description: string,
}

const ProductDescription: FC<Props> = ({ description }) => {
  return (
    <div className={styles()}>
      <h3>Описание</h3>
      <p>{description}</p>
    </div>
  )
}

export { ProductDescription }