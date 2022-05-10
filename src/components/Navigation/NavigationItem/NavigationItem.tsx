import React, { FC } from "react"
import { styles } from "./NavigationItem.styles"

type Props = {
  title: string
  url: string
  icon: JSX.Element
  variant?: "primary" | "secondary"
}

const NavigationItem: FC<Props> = ({ title, url, icon, variant }) => {
  return (
    <a href={url} className={styles({ color: variant })}>
      {icon}
      <span>{title}</span>
    </a>
  )
}

export { NavigationItem }
