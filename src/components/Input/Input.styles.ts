import { css } from "../../theme"

export const styles = css({
  display: "flex",
})

export const inputStyles = css({
  border: "solid 1px $dark10",
  borderRadius: "8px",
  padding: "10px",
  fontWeight: 500,
  display: "flex",
  width: "100%",

  "&::placeholder": {
    color: "$dark30",
  }
})