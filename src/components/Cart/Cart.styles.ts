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

export const Title = styled("p", {
  textTransform: "uppercase",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.3em",
  color: "$primary100",
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