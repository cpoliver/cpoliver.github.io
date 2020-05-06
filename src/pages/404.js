import React from "react"
import { Box } from "rebass"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <Box>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Box>
)

export default NotFoundPage
