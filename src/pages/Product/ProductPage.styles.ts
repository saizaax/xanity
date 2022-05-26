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
  rowGap: "20px",
})

export const TitleContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
})

export const Title = styled("h2", {
  fontSize: "24px",
  fontWeight: 700,
  color: "$dark100",
})

export const FavoriteContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  columnGap: "20px",
  width: "100%",
})

export const ProductId = styled("p", {
  fontSize: "16px",
  fontWeight: 500,
  color: "$dark100",
  opacity: 0.5,
})

export const ProductContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "minmax(500px, 1fr) minmax(300px, 1fr) minmax(260px, 320px)",
  gap: "30px",

  "@bp1440": {
    gridTemplateColumns: "minmax(500px, 1fr) minmax(300px, 1fr)",
    gridTemplateRows: "1fr 250px",
  },

  "@bp1170": {
    gridTemplateColumns: "minmax(300px, 1fr)",
    gridTemplateRows: "1fr auto 250px",
    columnGap: "0px",
  }
})
