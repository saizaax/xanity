import { css, styled } from "../../theme"

export const styles = css({
  display: "flex",
  flexDirection: "column",
  rowGap: "15px",

  h3: {
    fontSize: "20px",
    fontWeight: 700,
    color: "$dark100",
  },
})

export const CharacteristicsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  rowGap: "10px",
})
