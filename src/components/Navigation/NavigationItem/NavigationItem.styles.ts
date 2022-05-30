import { css } from "../../../theme"

export const styles = css({
  fontSize: "16px",
  fontWeight: 500,
  color: "$dark80",
  display: "flex",
  columnGap: "10px",
  alignItems: "center",
  background: "transparent",
  border: "none",
  width: "fit-content",

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
    type: {
      secondary: {
        span: {
          order: -1,
        },
      },
    },
  },

  defaultVariants: {
    color: "primary",
  },
})
