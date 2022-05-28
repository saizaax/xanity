import { css, styled } from "../../theme"

export const styles = css({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "490px",
  background: "$white",
  borderRadius: "15px",
  padding: "45px",
  boxSizing: "border-box",

  "@bp640": {
    padding: "30px",
  }
})

export const Background = styled("div", {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.4)",
})

export const Close = styled("button", {
  position: "absolute",
  top: "20px",
  right: "20px",
  padding: 0,
  border: "none",
  borderRadius: "50%",
  height: "24px",
  width: "24px",
  cursor: "pointer",

  "&:hover": {
    opacity: 0.6,
  }
})