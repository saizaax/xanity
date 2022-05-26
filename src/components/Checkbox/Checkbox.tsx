import React, { FC } from 'react'
import { styles } from './Checkbox.styles'

type Props = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  checked?: boolean,
  label?: string,
}

const Checkbox: FC<Props> = ({ label }) => {
  return (
    <div className={styles()}>
      <label>
        <input type="checkbox" />
        {label}
      </label>
    </div>
  )
}

export { Checkbox }