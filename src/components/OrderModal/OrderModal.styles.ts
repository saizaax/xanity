import { css, styled } from "../../theme"

export const styles = css({
  display: "flex",
  flexDirection: "column",
  rowGap: "30px",
  alignItems: "flex-start",

  h2: {
    fontSize: "18px",
    fontWeight: 700,
  }
})

export const Products = styled("div", {
  display: "flex",
  flexDirection: "column",
  rowGap: "10px",
  width: "100%",
})

export const InputContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  rowGap: "20px",
  width: "100%",
})

export const ActionsContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
})

export const SelectorContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  rowGap: "10px",
})

export const Title = styled("p", {
  fontSize: "12px",
  fontWeight: 600,
  textTransform: "uppercase",
  color: "$dark50",
})

export const Selectors = styled("div", {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
})