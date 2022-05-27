import React, { FC } from "react"
import { Results, Title, TitleContainer } from "./SectionTitle.styles"

type Props = {
  title: string
  results?: string
}

const SectionTitle: FC<Props> = ({ title, results }) => {
  return (
    <TitleContainer>
      <Title>{title}</Title>
      <Results>{results}</Results>
    </TitleContainer>
  )
}

export { SectionTitle }
