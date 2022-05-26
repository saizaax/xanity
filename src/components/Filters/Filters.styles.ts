import { css, styled } from "../../theme"

export const styles = css({
  display: "flex",
  flexDirection: "column",
  rowGap: "25px",
  padding: "30px",
  border: "solid 1px $dark15",
  borderRadius: "15px",
  width: "300px",
  boxSizing: "border-box",
  height: "fit-content",

  "@bp700": {
    width: "100%",
  },

  p: {
    fontSize: "12px",
    fontWeight: 700,
    color: "$primary100",
    textTransform: "uppercase",
  }
})

export const CheckboxContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  rowGap: "10px",
})

export const InputContainer = styled("div", {
  display: "flex",
  columnGap: "10px",
  marginBottom: "10px",
})

export const ButtonsContainer = styled("div", {
  display: "flex",
  columnGap: "20px",
  alignItems: "center",
})