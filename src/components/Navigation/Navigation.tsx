import React, { FC } from "react"

import logo from "../../assets/icons/logo.svg"

import { NavigationContainer, styles } from "./Navigation.styles"
import { Search } from "../Search/Search"
import { NavigationItem } from "./NavigationItem/NavigationItem"
// import handbagIcon from "../../assets/icons/handbag.svg"
// import tagIcon from "../../assets/icons/tag.svg"
import starIcon from "../../assets/icons/star.svg"
import shoppingIcon from "../../assets/icons/shopping.svg"
import logoutIcon from "../../assets/icons/logout.svg"
import loginIcon from "../../assets/icons/login.svg"
import { AuthContext } from "../../context/AuthContext"
import { SettingsContext } from "../../context/SettingsContext"
import { Link } from "react-router-dom"
import Cookies from "js-cookie"

type Props = {
  isAdmin: boolean
}

const Navigation: FC<Props> = ({ isAdmin }) => {
  const { settingsContext } = React.useContext(SettingsContext)
  const { userContext, tokenContext, isLoggedContext } =
    React.useContext(AuthContext)

  const [, setUser] = userContext
  const [, setToken] = tokenContext
  const [settings, setSettings] = settingsContext
  const [isLogged, setIsLogged] = isLoggedContext

  const logout = () => {
    Cookies.remove("token")
    setToken(undefined)
    setIsLogged(false)
    setUser(undefined)
  }

  return (
    <div className={styles()}>
      <Link to="/">
        <img src={logo} alt="xanity" />
      </Link>
      <Search />
      <NavigationContainer>
        {/* <NavigationItem
          url="/"
          title="Товары"
          icon={<img src={handbagIcon} alt="Товары" />}
        /> */}
        {/* <NavigationItem
          url="/"
          title="Заказы"
          icon={<img src={tagIcon} alt="Заказы" />}
        /> */}
        {isLogged ? (
          <NavigationItem
            url="/favorite"
            title="Избранное"
            icon={<img src={starIcon} alt="Избранное" />}
          />
        ) : null}
        {isLogged ? (
          <NavigationItem
            url="/cart"
            title="Корзина"
            icon={<img src={shoppingIcon} alt="Корзина" />}
          />
        ) : (
          <NavigationItem
            onClick={() => setSettings({ ...settings, signInModal: true })}
            title="Корзина"
            icon={<img src={shoppingIcon} alt="Корзина" />}
          />
        )}
        {isLogged ? (
          <NavigationItem
            onClick={() => logout()}
            title="Выйти"
            icon={<img src={logoutIcon} alt="Выйти" />}
            variant="secondary"
          />
        ) : (
          <NavigationItem
            onClick={() => setSettings({ ...settings, signInModal: true })}
            title="Войти"
            icon={<img src={loginIcon} alt="Войти" />}
            variant="secondary"
            type="secondary"
          />
        )}
      </NavigationContainer>
    </div>
  )
}

export { Navigation }
