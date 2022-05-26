import React, { FC } from "react"
import { Socials } from "../Socials/Socials"
import { styles, Mail } from "./Header.styles"

const Header: FC = () => {
  return (
    <header className={styles()}>
      <Mail>
        <a href="mailto:support@xanity.com">SUPPORT@XANITY.COM</a>
      </Mail>
      <Socials />
    </header>
  )
}

export { Header }
