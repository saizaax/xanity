import React, { FC } from "react"
import { styles } from "./Socials.styles"

import facebook from "../../assets/icons/facebook.svg"
import instagram from "../../assets/icons/instagram.svg"
import twitter from "../../assets/icons/twitter.svg"
import vk from "../../assets/icons/vk.svg"

const Socials: FC = () => {
  return (
    <div className={styles()}>
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
    </div>
  )
}

export { Socials }
