import { css, styled } from "../../theme"

export const styles = css({
  padding: "30px",
  border: "solid 1px",
  borderColor: "$dark15",
  borderRadius: "15px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  rowGap: "20px",
  transition: "0.1s",

  "&:hover": {
    transition: "0.1s",
    boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.1)",
  }
})

export const DescriptionContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  rowGap: "10px",
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