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
  columnGap: "25px",
  rowGap: "25px",
  height: "fit-content",

  "@bp640": {
    flexWrap: "wrap",
  }
})

export const PromoContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  rowGap: "25px",
  width: "100%",
  height: "fit-content",
})

export const CategoryContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr);",
  gap: "10px 10px",

  "@media screen and (max-width: 1820px)": {
    gridTemplateColumns: "repeat(2, 1fr);",
  },

  "@media screen and (max-width: 1115px)": {
    gridTemplateColumns: "1fr",
  },
})