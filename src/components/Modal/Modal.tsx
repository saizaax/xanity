import React, { FC } from "react"
import { Background, Close, styles } from "./Modal.styles"

import closeIcon from "../../assets/icons/close.svg"

type Props = {
  children: React.ReactNode
  size?: "large",
  onClose?: () => void
}

const Modal: FC<Props> = ({ children, size, onClose }) => {
  return (
    <>
      <Background />
      <div className={styles({ size: size })}>
        <Close onClick={onClose}>
          <img src={closeIcon} alt="close" />
        </Close>
        {children}
      </div>
    </>
  )
}

export { Modal }
