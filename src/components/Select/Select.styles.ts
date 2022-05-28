import { css } from "../../theme"

export const styles = css({
  width: "110px",
  display: "flex",
  justifyContent: "center",
  background: "transparent",
  color: "$dark75",
  fontSize: "14px",
  border: "solid 1px $dark15",
  borderRadius: "7px",
  padding: "8px 10px",
  fontWeight: 500,
  whiteSpace: "nowrap",
  cursor: "pointer",

  variants: {
    type: {
      primary: {
        color: "$primary100",
        borderColor: "$primary100",
      }
    }
  },
})