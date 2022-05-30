import { css, styled } from "../../theme"

export const styles = css({
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 160px",
  backgroundColor: "$primary100",

  "@bp970": {
    padding: "0 20px",
  },
})

export const Mail = styled("div", {
  "& > a": {
    color: "$white",
    fontSize: "14px",
    fontWeight: 600,

    "&:hover": {
      opacity: "0.75",
    },
  },
})
