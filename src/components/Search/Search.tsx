import React, { FC, useState } from "react"
import { InputContainer, styles } from "./Search.styles"

import searchIcon from "../../assets/icons/search.svg"

const Search: FC = () => {
  const [, setValue] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <InputContainer>
      <input className={styles()} placeholder="Поиск" type="text" onChange={handleChange} />
      <img src={searchIcon} alt="search" />
    </InputContainer>
  )
}

export { Search }
