import { css, styled } from "../../theme"

export const styles = css({
  display: "flex",
  flexDirection: "column",
  rowGap: "45px",
  marginBottom: "45px",
  flexWrap: "wrap",
})

export const MainContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  rowGap: "45px",
})

export const Title = styled("h2", {
  fontWeight: 700,
  fontSize: "24px",
  color: "$dark100",
})

export const ProductsContainer = styled("div", {
  display: "flex",
  columnGap: "25px",
  rowGap: "25px",

  "@bp700": {
    flexDirection: "column",
  }
})

export const Products = styled("div", {
  display: "grid",
  gap: "25px",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
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