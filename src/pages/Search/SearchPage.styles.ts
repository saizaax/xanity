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

export const ProductsContainer = styled("div", {
  display: "flex",
  columnGap: "25px",
  rowGap: "25px",

  "@bp700": {
    flexDirection: "column",
  },
})

export const Products = styled("div", {
  width: "100%",
  display: "grid",
  gap: "20px",
  gridTemplateColumns: "repeat(4, 1fr)",

  "@media screen and (max-width: 1720px)": {
    gridTemplateColumns: "repeat(3, 1fr);",
  },

  "@media screen and (max-width: 1320px)": {
    gridTemplateColumns: "repeat(2, 1fr);",
  },

  "@media screen and (max-width: 1115px)": {
    gridTemplateColumns: "1fr",
  },
})
