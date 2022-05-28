import React, { FC } from 'react'
import { Background, Close, styles } from './Modal.styles'

import closeIcon from '../../assets/icons/close.svg'

type Props = {
  children: React.ReactNode
}

const Modal: FC<Props> = ({ children }) => {
  return (
    <>
      <Background />
      <div className={styles()}>
        <Close>
          <img src={closeIcon} alt="close" />
        </Close>
        {children}
      </div>
    </>
  )
}

export { Modal }