import { css } from "../../../theme"

export const styles = css({
  border: "solid 1px",
  borderColor: "$dark05",
  borderRadius: "10px",
  overflow: "hidden",
  position: "relative",
  display: "flex",
  minHeight: "244px",

  img: {
    width: "100%",
    height: "100%",
    position: "relative",
    top: "2px",
    objectFit: "contain",
  }
})