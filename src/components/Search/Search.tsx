import React, { FC, useState } from "react"
import { styles } from "./Search.styles"

const Search: FC = () => {
  const [, setValue] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <input className={styles()} placeholder="Поиск товаров" type="text" onChange={handleChange} />
  )
}

export { Search }
