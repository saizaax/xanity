import { css, styled } from "../../theme"

export const styles = css({
  display: "flex",
  columnGap: "60px",
  rowGap: "45px",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
})

export const NavigationContainer = styled("div", {
  display: "flex",
  columnGap: "40px",
  rowGap: "40px",

  "@bp640": {
    flexWrap: "wrap",
    justifyContent: "center",
  },
})
