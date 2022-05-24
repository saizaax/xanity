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
  cursor: "pointer",
  transition: "0.1s",

  "&:hover": {
    transition: "0.1s",
    transform: "translateY(-5px)",
    boxShadow: "20px 20px 40px rgba(0, 0, 0, 0.1)",
  }
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
