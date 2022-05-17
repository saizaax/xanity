import { css } from "../../theme"

import promoImage from "../../assets/promo.png"

export const styles = css({
  display: "flex",
  flexDirection: "column",
  height: "465px",
  width: "100%",
  padding: "70px 80px", 
  borderRadius: "15px",
  border: "solid 1px",
  borderColor: "$dark15",
  boxSizing: "border-box",
  background: `url(${promoImage})`,
  backgroundPosition: "right",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
})