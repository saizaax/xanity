import { css, styled } from "../../theme"

export const styles = css({
  display: "flex",
  columnGap: "10px",
})

export const SideImageContainer = styled("div", {
  width: "85px",
  minWidth: "85px",
  maxHeight: "606px",
  display: "flex",
  flexDirection: "column",
  rowGap: "5px",
  overflow: "hidden",
  boxSizing: "border-box",
})

export const SideImage = styled("img", {
  cursor: "pointer",
  width: "80px",
  height: "80px",
  borderRadius: "5px",
  border: "solid 1px",
  borderColor: "$dark10",

  variants: {
    type: {
      "active": {
        border: "solid 2px",
        borderColor: "$primary100",
      }
    }
  }
})