import { css, styled } from "../../theme"

export const styles = css({
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

export const Item = styled("p", {
  fontWeight: 500,
  fontSize: "14px",
  color: "$dark75",
  whiteSpace: "nowrap",

  "@bp640": {
    whiteSpace: "initial",
  },

  variants: {
    color: {
      primary: {
        color: "$primary100",
      },
    },
  },
})

export const Price = styled("p", {
  fontWeight: 500,
  fontSize: "14px",
  color: "$primary100",
  whiteSpace: "nowrap",
})
