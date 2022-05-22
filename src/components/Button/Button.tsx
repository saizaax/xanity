import React, { FC, MouseEventHandler, ReactNode } from 'react'
import { styles } from './Button.styles'

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>,
  children: ReactNode,
}

const Button: FC<Props> = ({ children, onClick}) => {
  return (
    <button className={styles()} onClick={onClick}>{children}</button>
  )
}

export { Button }