import React, { FC } from "react"
import { inputStyles, Label, styles } from "./Input.styles"

type Props = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  label?: string
  size?: "default"
  type?: "text" | "password"
  disabled?: boolean
}

const Input: FC<Props> = ({ onChange, placeholder, label, size, type, disabled }) => {
  return (
    <div className={styles()}>
      {label ? <Label>{label}</Label> : null}
      <input
        className={inputStyles({ size: size })}
        onChange={onChange}
        type={type || "text"}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  )
}

export { Input }
