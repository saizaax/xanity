import { css, styled } from "../../theme"

export const styles = css({
  display: "flex",
  flexDirection: "column",
  rowGap: "10px",
  width: "100%",
})

export const inputStyles = css({
  border: "solid 1px $dark10",
  borderRadius: "8px",
  padding: "10px",
  fontWeight: 500,
  display: "flex",
  width: "100%",
  boxSizing: "border-box",

  "&::placeholder": {
    color: "$dark30",
  },

  variants: {
    size: {
      default: {
        fontSize: "16px",
        fontWeight: 500,
        padding: "14px 18px",
      },
    },
  },
})

export const Label = styled("label", {
  fontSize: "12px",
  textTransform: "uppercase",
  fontWeight: 600,
  color: "$dark50",
})
