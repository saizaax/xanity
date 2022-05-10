import React, { FC } from "react"
import { styles, Geo, Socials, Contacts } from "./Header.styles"

import mapIcon from "../../assets/icons/map.svg"
import facebook from "../../assets/icons/facebook.svg"
import instagram from "../../assets/icons/instagram.svg"
import twitter from "../../assets/icons/twitter.svg"
import vk from "../../assets/icons/vk.svg"

const Header: FC = () => {
  return (
    <header className={styles()}>
      <Geo>
        <img src={mapIcon} alt="" />
        <p>Москва</p>
      </Geo>
      <Contacts>
        <a href="mailto:support@xanity.com">SUPPORT@XANITY.COM</a>
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
      </Contacts>
    </header>
  )
}

export { Header }
