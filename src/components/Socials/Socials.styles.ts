import { css } from "../../theme"

export const styles = css({
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
