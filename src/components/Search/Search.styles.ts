import { css } from "../../theme"

export const styles = css({
  padding: "20px 24px",
  border: "solid 1px",
  borderColor: "$dark15",
  borderRadius: "12px",
  color: "$dark100",
  fontSize: "18px",
  fontWeight: "medium",
  outline: "none",
  display: "flex",
  width: "100%",

  "&::placeholder": {
    color: "$dark25",
  },

  "&:hover": {
    borderColor: "$dark25",
  },

  "&:focus": {
    borderColor: "$dark25",
  },
})
