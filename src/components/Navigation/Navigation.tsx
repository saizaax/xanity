import React from "react"
import { NavigationContainer, styles } from "./Navigation.styles"
import { Search } from "../Search/Search"
import { NavigationItem } from "./NavigationItem/NavigationItem"

import logo from "../../assets/icons/logo.svg"
import handbagIcon from "../../assets/icons/handbag.svg"
import tagIcon from "../../assets/icons/tag.svg"
import starIcon from "../../assets/icons/star.svg"
import shoppingIcon from "../../assets/icons/shopping.svg"
import logoutIcon from "../../assets/icons/logout.svg"

type Props = {
  isAdmin: boolean
}

const Navigation = (props: Props) => {
  return (
    <div className={styles()}>
      <img src={logo} alt="xanity" />
      <Search />
      <NavigationContainer>
        <NavigationItem
          url="/"
          title="Товары"
          icon={<img src={handbagIcon} alt="Товары" />}
        />
        <NavigationItem
          url="/"
          title="Заказы"
          icon={<img src={tagIcon} alt="Заказы" />}
        />
        <NavigationItem
          url="/"
          title="Избранное"
          icon={<img src={starIcon} alt="Избранное" />}
        />
        <NavigationItem
          url="/"
          title="Корзина"
          icon={<img src={shoppingIcon} alt="Корзина" />}
        />
        <NavigationItem
          url="/"
          title="Выйти"
          icon={<img src={logoutIcon} alt="Выйти" />}
          variant="secondary"
        />
      </NavigationContainer>
    </div>
  )
}

export { Navigation }
