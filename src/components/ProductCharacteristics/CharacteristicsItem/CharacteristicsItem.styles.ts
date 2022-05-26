import { css, styled } from "../../../theme"

export const styles = css({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
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

export const Key = styled("p", {
  fontSize: "14px",
  fontWeight: 500,
  color: "$dark75",
  whiteSpace: "nowrap",
})

export const Value = styled("p", {
  fontSize: "14px",
  fontWeight: 500,
  color: "$primary100",
  whiteSpace: "nowrap",
})