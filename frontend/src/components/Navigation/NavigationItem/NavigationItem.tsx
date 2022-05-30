import React, { FC } from "react"
import { Link } from "react-router-dom"
import { styles } from "./NavigationItem.styles"

type Props = {
  title: string
  url?: string
  icon: JSX.Element
  variant?: "primary" | "secondary"
  type?: "secondary"
  onClick?: () => void
}

const NavigationItem: FC<Props> = ({
  title,
  url,
  icon,
  variant,
  type,
  onClick,
}) => {
  return (
    <>
      {onClick ? (
        <button onClick={onClick} className={styles({ color: variant, type: type })}>
          {icon}
          <span>{title}</span>
        </button>
      ) : (
        <Link to={url || "/"} className={styles({ color: variant, type: type })}>
          {icon}
          <span>{title}</span>
        </Link>
      )}
    </>
  )
}

export { NavigationItem }
