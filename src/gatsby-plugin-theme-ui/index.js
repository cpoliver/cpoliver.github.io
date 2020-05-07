export const colors = {
  text: "#f2f2f2",
  background: "#303030",
  primary: "#07c",
  secondary: "#05a",
  muted: "#8d8d8d",
}

export const typography = {
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

const styles = {
  root: {
    boxSizing: "border",
    fontFamily: "body",
    fontWeight: "body",
  },
}

export default {
  ...typography,
  colors,
  styles,
}
