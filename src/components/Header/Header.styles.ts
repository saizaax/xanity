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
  }
})

export const Mail = styled("div", {
  "& > a": {
    color: "$white",
    fontSize: "14px",
    fontWeight: "semibold",

    "&:hover": {
      opacity: "0.75",
    },
  },
})

export const Socials = styled("div", {
  display: "flex",
  alignItems: "center",
  columnGap: "15px",

  "& img": {
    opacity: "0.5",
    cursor: "pointer",

    "&:hover": {
      opacity: "1",
    },
  },
})
