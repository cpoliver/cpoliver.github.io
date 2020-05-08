import React from "react"
import { Box } from "rebass"

export const Layout = ({ children, ...props }) => (
  <Box {...props}>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
      rel="stylesheet"
    />
    {children}
  </Box>
)
