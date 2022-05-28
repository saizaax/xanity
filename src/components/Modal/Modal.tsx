import React, { FC } from 'react'
import { Background, Close, styles } from './Modal.styles'

import closeIcon from '../../assets/icons/close.svg'

type Props = {
  children: React.ReactNode,
  size?: "large"
}

const Modal: FC<Props> = ({ children, size }) => {
  return (
    <>
      <Background />
      <div className={styles({ size: size })}>
        <Close>
          <img src={closeIcon} alt="close" />
        </Close>
        {children}
      </div>
    </>
  )
}

export { Modal }