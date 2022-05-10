import { css } from "../../../theme"

export const styles = css({
  fontSize: "16px",
  fontWeight: "medium",
  color: "$dark80",
  display: "flex",
  columnGap: "10px",
  alignItems: "center",

  variants: {
    color: {
      primary: {
        color: "$dark80",

        "&:hover": {
          color: "$primary100",
        },
      },
      secondary: {
        color: "$primary100",

        "&:hover": {
          color: "$primary80",
        },
      },
    },
  },

  defaultVariants: {
    color: "primary",
  },
})
