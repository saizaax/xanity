import { css, styled } from "../../theme"

export const styles = css({
  padding: "30px 0px",
  boxSizing: "border-box",
  display: "flex",
  columnGap: "20px",
  rowGap: "20px",
  transition: "0.1s",
  alignItems: "center",

  "@bp640": {
    flexDirection: "column",
    alignItems: "flex-start",
  },
})

export const DescriptionContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  rowGap: "10px",
  width: "100%",
})

export const Title = styled("h3", {
  fontSize: "16px",
  fontWeight: 600,
  color: "$dark100",
})

export const Description = styled("p", {
  fontWeight: 600,
  fontSize: "14px",
  color: "$dark50",
})

export const PriceContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})

export const Price = styled("h2", {
  fontSize: "20px",
  fontWeight: 600,
  color: "$dark100",
})
