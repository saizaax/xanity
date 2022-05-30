import React, { FC, ReactNode } from 'react'
import { styles } from './ProductCardTag.styles'

type Props = {
  children: ReactNode,
}

const ProductCardTag: FC<Props> = ({ children }) => {
  return (
    <div className={styles()}>{children}</div>
  )
}

export { ProductCardTag }