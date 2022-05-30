import React, { FC } from "react"
import { CategoriesItem } from "./CategoriesItem/CategoriesItem"
import { Separator } from "../Separator/Separator"
import { styles } from "./Categories.styles"

import weightIcon from "../../assets/icons/weight.svg"
import mobileIcon from "../../assets/icons/mobile.svg"
import monitorIcon from "../../assets/icons/monitor.svg"
import cpuIcon from "../../assets/icons/cpu.svg"
import printerIcon from "../../assets/icons/printer.svg"
import headphonesIcon from "../../assets/icons/headphones.svg"
import gameIcon from "../../assets/icons/game.svg"
import lampIcon from "../../assets/icons/lamp.svg"
import mouseIcon from "../../assets/icons/mouse.svg"
import mirroringIcon from "../../assets/icons/mirroring.svg"

const Categories: FC = () => {
  return (
    <nav className={styles()}>
      <CategoriesItem
        title="Бытовая техника"
        icon={<img src={weightIcon} alt="" />}
        url="/search"
      />
      <Separator />
      <CategoriesItem
        title="Смартфоны и гаджеты"
        icon={<img src={mobileIcon} alt="" />}
        url="/search"
      />
      <Separator />
      <CategoriesItem
        title="TV и мультимедиа"
        icon={<img src={monitorIcon} alt="" />}
        url="/search"
      />
      <Separator />
      <CategoriesItem
        title="Компьютеры"
        icon={<img src={cpuIcon} alt="" />}
        url="/search"
      />
      <Separator />
      <CategoriesItem
        title="Офисная техника"
        icon={<img src={printerIcon} alt="" />}
        url="/search"
      />
      <Separator />
      <CategoriesItem
        title="Аудиотехника"
        icon={<img src={headphonesIcon} alt="" />}
        url="/search"
      />
      <Separator />
      <CategoriesItem
        title="Игры и развлечения"
        icon={<img src={gameIcon} alt="" />}
        url="/search"
      />
      <Separator />
      <CategoriesItem
        title="Для дома"
        icon={<img src={lampIcon} alt="" />}
        url="/search"
      />
      <Separator />
      <CategoriesItem
        title="Аксессуары"
        icon={<img src={mouseIcon} alt="" />}
        url="/search"
      />
      <Separator />
      <CategoriesItem
        title="Умный дом"
        icon={<img src={mirroringIcon} alt="" />}
        url="/search"
      />
    </nav>
  )
}

export { Categories }
