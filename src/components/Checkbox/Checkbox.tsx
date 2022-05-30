import React, { FC } from "react"
import { styles } from "./Checkbox.styles"

type Props = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  checked?: boolean
  label?: string
  disabled?: boolean
}

const Checkbox: FC<Props> = ({ label, disabled }) => {
  return (
    <div className={styles()}>
      <label>
        <input type="checkbox" disabled={disabled} />
        {label}
      </label>
    </div>
  )
}

export { Checkbox }
