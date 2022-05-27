import { styled } from "../../theme"

export const Title = styled("h2", {
  fontWeight: 700,
  fontSize: "24px",
  color: "$dark100",
})

export const TitleContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  alignItems: "center",
})

export const Results = styled("p", {
  fontSize: "18px",
  fontWeight: 500,
  color: "$dark50",
})