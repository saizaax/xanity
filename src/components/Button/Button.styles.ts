import { css } from "../../theme"

export const styles = css({
  padding: "15px 25px",
  background: "$primary100",
  borderRadius: "25px",
  border: "none",
  fontWeight: 500,
  fontSize: "16px",
  color: "$white",
  cursor: "pointer",

  "&:hover": {
    background: "$primary80",
  }
})