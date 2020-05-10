import React from "react"
import { Flex } from "rebass"

import { Layout } from "../components/layout"
import { Header, Profile, Employment } from "../components/cv"
import SEO from "../components/seo"
import cv from "../data/cv.json"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Layout>
      <Flex
        sx={{
          justifyContent: "center",
          backgroundColor: "#888",
          flex: 1,
          minHeight: "100vh",
        }}
      >
        <Flex
          sx={{
            backgroundColor: "text",
            color: "background",
            flexDirection: "column",
            minWidth: 960,
          }}
        >
          <Header />
          <Profile />
          <Employment {...cv.employment[0]} />
        </Flex>
      </Flex>
    </Layout>
  </>
)

export default IndexPage
