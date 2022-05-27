import { css, styled } from "../../theme"

export const styles = css({
  maxWidth: "455px",
  width: "100%",
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  rowGap: "20px",
  boxSizing: "border-box",
  borderRadius: "15px",
  border: "solid 1px $dark15",
  height: "fit-content",

  "@bp1366": {
    maxWidth: "100%",
  }
})

export const CartContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  rowGap: "10px",
})

export const CartItem = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  columnGap: "5px",

  hr: {
    border: "none",
    borderTop: "2px dotted $dark10",
    backgroundColor: "transparent",
    height: "1px",
    width: "100%",
    position: "relative",
    bottom: "2px",
  },
})

export const Title = styled("p", {
  textTransform: "uppercase",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.3em",
})

export const Item = styled("p", {
  fontWeight: 500,
  fontSize: "14px",
  color: "$dark75",
  whiteSpace: "nowrap",

  "@bp640": {
    whiteSpace: "initial",
  }
})

export const Price = styled("p", {
  fontWeight: 500,
  fontSize: "14px",
  color: "$primary100",
  whiteSpace: "nowrap",
})

export const TotalContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})

export const Total = styled("h2", {
  fontSize: "20px",
  color: "$dark100",
  fontWeight: 700,
  whiteSpace: "nowrap",
})