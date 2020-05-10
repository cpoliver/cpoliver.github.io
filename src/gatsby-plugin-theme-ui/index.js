export const colors = {
  text: "#f2f2f2",
  background: "#303030",
  primary: "#07c",
  secondary: "#05a",
  muted: "#bbb" || "#e5e5e5",
}

const typography = {
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
    monospace: "monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
}

const breakpoints = [
  //
  "40em",
  "52em",
  "64em",
]

const BASE_SIZE = 8

const space = [
  BASE_SIZE * 0, //    0  (0)
  BASE_SIZE / 2, //    4  (1)
  BASE_SIZE * 1, //    8  (2)
  BASE_SIZE * 2, //   16  (3)
  BASE_SIZE * 3, //   24  (4)
  BASE_SIZE * 4, //   32  (5)
  BASE_SIZE * 5, //   40  (6)
  BASE_SIZE * 6, //   48  (7)
  BASE_SIZE * 8, //   64  (8)
  BASE_SIZE * 10, //  80  (9)
  BASE_SIZE * 12, //  96 (10)
  BASE_SIZE * 16, // 128 (11)
  BASE_SIZE * 32, // 256 (12)
]

const shadows = {
  sm: "0 0 4px rgba(0, 0, 0, .25)",
  md: "0 0 8px rgba(0, 0, 0, .25)",
  lg: "0 0 24px rgba(0, 0, 0, .25)",
}

const styles = {
  root: {
    boxSizing: "border",
    fontFamily: "body",
    fontWeight: "body",
  },
}

export default {
  ...typography,
  breakpoints,
  colors,
  shadows,
  space,
  styles,
}
