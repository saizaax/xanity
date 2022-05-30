import { css, styled } from "../../theme"

export const styles = css({
  display: "flex",
  flexDirection: "column",
  rowGap: "25px",
  padding: "30px",
  border: "solid 1px $dark10",
  borderRadius: "15px",
  flex: "1",
  height: "fit-content",

  "@bp1440": {
    gridRow: "2 / 2",
    gridColumn: "1 / 3",
  },

  "@bp1170": {
    gridRow: "3 / 3",
  },
})

export const OrderContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  rowGap: "10px",

  p: {
    display: "flex",
    columnGap: "5px",
    fontSize: "14px",
    fontWeight: 500,
    color: "$dark100",
    whiteSpace: "nowrap",

    img: {
      position: "relative",
      bottom: "1px",
    },
  },
})
