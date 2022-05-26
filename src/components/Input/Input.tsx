import React, { FC } from "react"
import { inputStyles, styles } from "./Input.styles"

type Props = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

const Input: FC<Props> = ({ onChange, placeholder }) => {
  return (
    <div className={styles()}>
      <input
        className={inputStyles()}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
      />
    </div>
  )
}

export { Input }
