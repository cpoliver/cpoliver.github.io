import React from "react"
import { Box, Flex, Link, Text } from "rebass"

import { Layout } from "../components/layout"
import SEO from "../components/seo"
import cv from "../data/cv.json"

const Header = () => (
  <Flex
    sx={{
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center",
    }}
  >
    <Text as="h1" sx={{ fontWeight: "bold", pt: 6, pb: 1, fontSize: 46 }}>
      {cv.name.first}&nbsp;
      <Text as="span" fontWeight="normal">
        {cv.name.initial}&nbsp;
      </Text>
      {cv.name.last}
    </Text>
    <Text fontSize={18}>{cv.jobTitle}</Text>
    <Flex
      sx={{
        alignSelf: "stretch",
        backgroundColor: "#eee",
        flex: 1,
        mt: 4,
      }}
    >
      <Text
        sx={{
          borderWidth: "1px 0",
          borderStyle: "solid",
          borderColor: "muted",
          flex: 1,
          py: 2,
          px: 3,
          textAlign: "right",
        }}
      >
        {[cv.contact.phone.prefix, ...cv.contact.phone.number].join(" ")}
      </Text>
      <Text
        sx={{
          borderWidth: 1,
          borderRightWidth: 0,
          borderStyle: "solid",
          borderColor: "muted",
          flex: 1,
          py: 2,
          px: 3,
          textAlign: "left",
        }}
      >
        {Object.values(cv.contact.email).join("@")}
      </Text>
    </Flex>
  </Flex>
)

const Experience = props => <Box {...props} />

const Profile = () => (
  <Flex flexDirection="column">
    {/*  */}
    Profile
  </Flex>
)

const Employment = () => (
  <Flex flexDirection="column">
    {/*  */}
    Employment
  </Flex>
)

const Qualifications = () => (
  <Flex flexDirection="column">
    {/*  */}
    Education
  </Flex>
)

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
          <Employment />
          <Qualifications />
        </Flex>
      </Flex>
    </Layout>
  </>
)

export default IndexPage
