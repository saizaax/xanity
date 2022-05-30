import { css, styled } from "../../theme"

export const styles = css({
  padding: "20px 24px",
  paddingRight: "60px",
  border: "solid 1px",
  borderColor: "$dark15",
  borderRadius: "12px",
  color: "$dark100",
  fontSize: "18px",
  fontWeight: 500,
  outline: "none",
  display: "flex",
  alignItems: "center",
  width: "100%",
  minWidth: "240px",

  "&::placeholder": {
    color: "$dark25",
  },

  "&:hover": {
    borderColor: "$dark25",
  },

  "&:focus": {
    borderColor: "$dark25",
  },

  "& + img": {
    position: "absolute",
    top: "50%",
    right: "24px",
    transform: "translateY(-50%)",
  },
})

export const InputContainer = styled("div", {
  display: "flex",
  position: "relative",
  flex: "1",
})
