import React, { FC } from 'react'
import { styled } from '../../../theme'

type Props = {
  url: string
}

const CategoryCardPreview: FC<Props> = ({ url }) => {
  
  const Preview = styled("div", {
    background: `url(${url})`,
    height: "170px",
    width: "135px",
  })

  return (
    <Preview />
  )
}

export { CategoryCardPreview }