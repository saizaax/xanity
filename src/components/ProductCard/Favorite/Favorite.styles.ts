import { css } from "../../../theme"

export const styles = css({
  background: "linear-gradient(180deg, #FBFAFF 0%, #F6F4FF 100%)",
  borderRadius: "10px",
  border: "none",
  position: "absolute",
  top: "15px",
  right: "15px",
  cursor: "pointer",

  "&:hover": {
    opacity: "0.5",
  },
})
