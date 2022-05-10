import React, { FC } from 'react'
import { styles } from "./CategoriesItem.styles"

type Props = {
  title: string
  url: string
  icon: JSX.Element
}

const CategoriesItem: FC<Props> = ({ title, icon, url }) => {
  return (
    <a className={styles()} href={url}>{icon}{title}</a>
  )
}

export { CategoriesItem }