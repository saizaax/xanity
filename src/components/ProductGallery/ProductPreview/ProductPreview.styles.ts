import { css } from "../../../theme"

export const styles = css({
  display: "flex",
  maxWidth: "605px",
  maxHeight: "605px",
  borderRadius: "20px",
  border: "solid 1px",
  borderColor: "$dark10",
  overflow: "hidden",

  img: {
    objectFit: "contain",
    width: "100%",
  },
})
