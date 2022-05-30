import { css, styled } from "../../theme"

import promoImage from "../../assets/promo-ipad.png"

export const styles = css({
  display: "flex",
  minHeight: "465px",
  height: "fit-content",
  width: "100%",
  borderRadius: "15px",
  border: "solid 1px",
  borderColor: "$dark15",
  boxSizing: "border-box",
  alignItems: "center",
  overflow: "hidden",

  "@bp1366": {
    flexWrap: "wrap",
  }
})

export const Info = styled("div", {
  display: "flex",
  flexDirection: "column",
  rowGap: "20px",
  width: "100%",
  padding: "70px 0px 70px 80px", 
  
  "@bp1366": {
    padding: "0px 80px 70px 80px", 
  },

  "@bp640": {
    padding: "0px 40px 35px 40px", 
  }
})

export const Preview = styled("div", {
  width: "100%",
  minHeight: "465px",
  background: `url(${promoImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",

  "@bp1366": {
    order: "-1",
    backgroundPosition: "left",
  }
})

export const Title = styled("h1", {
  fontWeight: 900,
  fontSize: "48px",
  color: "$dark100",
})

export const Subtitle = styled("p", {
  fontSize: "20px",
  fontWeight: 600,
  color: "$primary100",
})

export const Description = styled("p", {
  color: "$dark100",
  fontWeight: 500,
  fontSize: "18px",
  maxWidth: "475px",
})

export const Price = styled("p", {
  fontSize: "22px",
  color: "$dark100",
  fontWeight: 700,
})

export const PriceContainer = styled("div", {
  display: "flex",
  columnGap: "25px",
  alignItems: "center",
})