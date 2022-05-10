import React from "react"

interface Props {
  title: string
  description?: string
  children?: React.ReactNode
}

const Card = ({ title, description }: Props) => {
  return (
    <>
      <div>{title}</div>
      <p>{description}</p>
    </>
  )
}

export { Card }
