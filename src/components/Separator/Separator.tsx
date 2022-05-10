import React, { FC } from "react"
import { styles } from "./Separator.styles"

type Props = {
  variant?: "primary" | "secondary"
}

const Separator: FC<Props> = ({ variant }) => {
  return <hr className={styles({ variant: variant })} />
}

export { Separator }
