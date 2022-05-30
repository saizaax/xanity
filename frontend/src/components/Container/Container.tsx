import React, { FC } from 'react'
import { styles } from './Container.styles'

type Props = {
  children: React.ReactNode
}

const Container: FC<Props> = ({ children }) => {
  return (
    <div className={styles()}>{children}</div>
  )
}

export { Container }