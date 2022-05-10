import { css } from "../../theme"

export const styles = css({
  display: "flex",
  width: "100%",
  height: "1px",
  border: "none",

  variants: {
    variant: {
      primary: {
        backgroundColor: "$dark10",
      },
      secondary: {
        backgroundColor: "$dark05",
      },
    },
  },

  defaultVariants: {
    variant: "primary",
  },
})
