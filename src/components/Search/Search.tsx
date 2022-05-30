import React, { FC, useState } from "react"
import { InputContainer, styles } from "./Search.styles"

import searchIcon from "../../assets/icons/search.svg"
import { useNavigate } from "react-router-dom"

const Search: FC = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      navigate("/search?query=" + value)
    }
  }

  return (
    <InputContainer>
      <input
        className={styles()}
        placeholder="Поиск"
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <img src={searchIcon} alt="search" />
    </InputContainer>
  )
}

export { Search }
