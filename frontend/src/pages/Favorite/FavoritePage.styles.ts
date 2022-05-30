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

export const Products = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "40px 50px",
  boxSizing: "border-box",
  rowGap: "10px",
  border: "solid 1px $dark15",
  borderRadius: "15px",
  width: "100%",
})
