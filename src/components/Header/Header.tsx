import React, { FC } from "react"
import { styles, Mail, Socials } from "./Header.styles"

import facebook from "../../assets/icons/facebook.svg"
import instagram from "../../assets/icons/instagram.svg"
import twitter from "../../assets/icons/twitter.svg"
import vk from "../../assets/icons/vk.svg"

const Header: FC = () => {
  return (
    <header className={styles()}>
      <Mail>
        <a href="mailto:support@xanity.com">SUPPORT@XANITY.COM</a>
      </Mail>
      <Socials>
        <a href="https://facebook.com/">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://instagram.com/">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://twitter.com/">
          <img src={twitter} alt="Twitter" />
        </a>
        <a href="https://vk.com/">
          <img src={vk} alt="VK" />
        </a>
      </Socials>
    </header>
  )
}

export { Header }
