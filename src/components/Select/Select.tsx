import React, { FC } from "react"
import { styles } from "./Select.styles"

type Props = {
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  type?: "primary"
}

const Select: FC<Props> = ({ children, type, onClick }) => {
  return (
    <button className={styles({ type: type })} onClick={onClick}>
      {children}
    </button>
  )
}

export { Select }
