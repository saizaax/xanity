import { css } from "../../theme"

export const styles = css({
  display: "flex",

  label: {
    display: "flex",
    columnGap: "5px",
    alignItems: "center",
    fontSize: "14px",
    fontWeight: 500,
    color: "$dark100",

    "input[type=checkbox]": {
      accentColor: "#6D4BFF",
    }
  },
})