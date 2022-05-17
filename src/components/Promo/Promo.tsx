import React, { FC } from 'react'
import { Badge } from '../Badge/Badge'
import { styles } from './Promo.styles'

type Props = {
  category?: string
  title?: string
  subtitle?: string
  description?: string
  price?: number
  url?: string,
  image?: string,
}

const Promo: FC<Props> = ({ category, title, subtitle, description, price, url }) => {
  return (
    <div className={styles()}>
      <Badge>Планшеты</Badge>
      <div>
        <h1>iPad Mini</h1>
        <p>A15 Bionic / 256GB</p>
      </div>
      <div>
        <button>Купить</button>
        <p>74 900 ₽</p>
      </div>
    </div>
  )
}

export { Promo }