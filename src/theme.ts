import { createStitches, globalCss } from "@stitches/react"

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0 },
  html: {
    background: "#fff",
  },
  body: {
    fontFamily: "Inter, sans-serif",
    background: "#fff"
  },
  "input, button": {
    outline: "none",
    fontFamily: "Inter, sans-serif"
  },
  a: {
    color: "#000",
    textDecoration: "none"
  },
})

export const { styled, css } = createStitches({
  theme: {
    colors: {
      dark100: "rgba(9, 18, 41, 1)",
      dark80: "rgba(9, 18, 41, 0.80)",
      dark75: "rgba(9, 18, 41, 0.75)",
      dark60: "rgba(9, 18, 41, 0.60)",
      dark50: "rgba(9, 18, 41, 0.50)",
      dark30: "rgba(9, 18, 41, 0.30)",
      dark25: "rgba(9, 18, 41, 0.25)",
      dark20: "rgba(9, 18, 41, 0.20)",
      dark15: "rgba(9, 18, 41, 0.15)",
      dark10: "rgba(9, 18, 41, 0.10)",
      dark05: "rgba(9, 18, 41, 0.05)",
      dark025: "rgba(9, 18, 41, 0.025)",
      primary100: "rgba(109, 75, 255, 1)",
      primary80: "rgba(109, 75, 255, 0.80)",
      primary15: "rgba(109, 75, 255, 0.15)",
      white: "rgba(255, 255, 255, 1)",
      error: "rgba(255, 75, 64, 1)",
      success: "rgba(0, 201, 104, 1)"
    }
  },
  media: {
    bp1440: "(max-width: 1440px)",
    bp1366: "(max-width: 1366px)",
    bp970: "(max-width: 970px)",
    bp640: "(max-width: 640px)",
  }
})

export const Wrapper = styled("div", {
  "@bp1440": {
    zoom: "90%"
  }
})