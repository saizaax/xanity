import { css, styled } from "../../../theme"

export const styles = css({
  display: "flex",
  flexDirection: "column",
  rowGap: "10px",

  p: {
    color: "$success",
    fontSize: "14px",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    columnGap: "5px",

    img: {
      position: "relative",
      top: "1px",
    }
  }
})

export const PriceContainer = styled("div", {
  display: "flex",
  flexDirection: "column",

  span: {
    fontSize: "12px",
    textTransform: "uppercase",
    color: "$dark30",
    fontWeight: 700,
  },

  h3: {
    fontWeight: 700,
    fontSize: "30px",
    color: "$dark100",
  }
})