import React, { FC } from "react"
import { styles } from "./Select.styles"

type Props = {
  children: React.ReactNode
  type?: "primary"
}

const Select: FC<Props> = ({ children, type }) => {
  return <button className={styles({ type: type })}>{children}</button>
}

export { Select }
