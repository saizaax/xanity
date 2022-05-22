import { css, styled } from "../../theme"

export const styles = css({
  display: "flex",
  border: "1px solid",
  borderColor: "$dark15",
  borderRadius: "15px",
  columnGap: "10px",
  paddingLeft: "30px",
  height: "170px",
  justifyContent: "space-between",
})

export const InfoContainer = styled("div", {
  padding: "40px 0px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
})

export const Info = styled("div", {
  h3: {
    fontSize: "18px",
    fontWeight: 700,
    color: "$dark100",
  },

  p: {
    fontSize: "14px",
    color: "$dark50",
    fontWeight: 500,
  }
})

export const Price = styled("p", {
  fontSize: "18px",
  fontWeight: 600,
  color: "$primary100",
  whiteSpace: "nowrap",
})
