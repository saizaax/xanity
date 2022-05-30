import { css } from "../../theme"

export const styles = css({
  display: "flex",
  flexDirection: "column",
  rowGap: "40px",

  "@bp1170": {
    gridRow: "2 / 3",
    gridColumn: "1 / 3",
  },
})
