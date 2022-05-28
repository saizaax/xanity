import React, { FC } from "react"
import { inputStyles, Label, styles } from "./Input.styles"

type Props = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  label?: string
  size?: "default"
}

const Input: FC<Props> = ({ onChange, placeholder, label, size }) => {
  return (
    <div className={styles()}>
      {label ? <Label>{label}</Label> : null}
      <input
        className={inputStyles({ size: size })}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
      />
    </div>
  )
}

export { Input }
