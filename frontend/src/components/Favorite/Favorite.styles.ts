import { css } from "../../theme"

export const styles = css({
  background: "transparent",
  border: "none",
  display: "flex",
  alignItems: "center",
  fontSize: "16px",
  fontWeight: 500,
  color: "$primary100",
  cursor: "pointer",
  textAlign: "start",

  "&:hover": {
    opacity: 0.8,
  },
})
