import React, { FC } from "react"
import { Button } from "../Button/Button"
import { Checkbox } from "../Checkbox/Checkbox"
import { Input } from "../Input/Input"
import { Separator } from "../Separator/Separator"
import { ButtonsContainer, CheckboxContainer, InputContainer, styles } from "./Filters.styles"

const Filters: FC = () => {
  return (
    <div className={styles()}>
      <CheckboxContainer>
        <p>Наличие</p>
        <Checkbox label="В наличии" />
        <Checkbox label="Отсутствует в продаже" />
      </CheckboxContainer>
      <Separator />
      <CheckboxContainer>
        <p>Стоимость</p>
        <InputContainer>
          <Input placeholder="от 999" disabled={true} />
          <Input placeholder="до 49 990" disabled={true} />
        </InputContainer>
        <Checkbox label="от 11 990 — 19 990 ₽" disabled={true} />
        <Checkbox label="от 19 990 — 29 990 ₽" disabled={true} />
        <Checkbox label="от 29 990 — 39 990 ₽" disabled={true} />
        <Checkbox label="от 39 990 — 49 990 ₽" disabled={true} />
      </CheckboxContainer>
      <ButtonsContainer>
        <Button size="small">Применить</Button>
        <Button size="small" color="transparent">Сбросить</Button>
      </ButtonsContainer>
    </div>
  )
}

export { Filters }
