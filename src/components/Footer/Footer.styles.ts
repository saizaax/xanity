import { css, styled } from "../../theme"

export const styles = css({
  height: "100px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  background: "$dark100",
  padding: "0px 160px",
  marginTop: "auto",
  boxSizing: "border-box",

  "@bp970": {
    padding: "20px",
    flexDirection: "column",
  }
})

export const Contact = styled("p", {
  fontSize: "14px",
  fontWeight: 500,
  textTransform: "uppercase",
  color: "$white",
})

export const SocialsContainer = styled("div", {
  display: "flex",
  columnGap: "30px",
  alignItems: "center",
})