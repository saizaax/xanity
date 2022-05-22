import { css } from "../../../theme"

export const styles = css({
  padding: "30px",
  display: "flex",
  alignItems: "center",
  columnGap: "10px",
  color: "$dark100",
  fontWeight: 500,

  "&:hover": {
    backgroundColor: "$dark025",
    cursor: "pointer",
  },
})
