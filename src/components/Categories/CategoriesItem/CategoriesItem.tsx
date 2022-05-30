import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { styles } from "./CategoriesItem.styles"

type Props = {
  title: string
  url: string
  icon: JSX.Element
}

const CategoriesItem: FC<Props> = ({ title, icon, url }) => {
  return (
    <Link className={styles()} to={url}>{icon}{title}</Link>
  )
}

export { CategoriesItem }