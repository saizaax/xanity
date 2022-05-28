import React, { FC, MouseEventHandler, ReactNode } from "react"
import { styles } from "./Button.styles"

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
  color?: "secondary" | "transparent" | "danger" | "border"
  size?: "small"
}

const Button: FC<Props> = ({ children, onClick, color, size }) => {
  return (
    <button className={styles({ color: color, size: size })} onClick={onClick}>
      {children}
    </button>
  )
}

export { Button }
