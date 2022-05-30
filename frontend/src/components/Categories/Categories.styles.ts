import { css } from "../../theme"

export const styles = css({
  display: "flex",
  flexDirection: "column",
  minWidth: "300px",
  border: "solid 1px",
  borderRadius: "15px",
  borderColor: "$dark15",
  overflow: "hidden",
  height: "fit-content",

  "@bp640": {
    width: "100%",
  },
})
