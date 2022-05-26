import { css } from "../../theme"

export const styles = css({
  padding: "15px 25px",
  background: "$primary100",
  borderRadius: "25px",
  border: "none",
  fontWeight: 500,
  fontSize: "16px",
  color: "$white",
  cursor: "pointer",
  width: "fit-content",

  "&:hover": {
    background: "$primary80",
  },

  variants: {
    color: {
      secondary: {
        background: "transparent",
        border: "solid 1px",
        borderColor: "$primary15",
        color: "$primary100",

        "&:hover": {
          background: "$primary10",
          borderColor: "transparent",
        },
      },
      transparent: {
        background: "transparent",
        border: "none",
        color: "$dark50",
        padding: 0,

        "&:hover": {
          color: "$dark75",
          background: "transparent",
        }
      }
    },
    size: {
      small: {
        padding: "14px 18px",
      }
    }
  }
})