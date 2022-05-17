import React, { FC } from 'react'
import { styles } from './Badge.styles'

type Props = {
  children: React.ReactNode
}

const Badge: FC<Props> = ({ children }) => {
  return (
    <p className={styles()}>{children}</p>
  )
}

export { Badge }