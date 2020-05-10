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
    <Text
      as="h1"
      sx={{
        fontSize: 46,
        fontWeight: "bold",
        opacity: 0.8,
        pb: 1,
        pt: 6,
      }}
    >
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

const Experience = ({ years, skills, sx = {} }) => (
  <Flex
    flex={1}
    mt={6}
    px={4}
    sx={{
      borderColor: "muted",
      borderStyle: "solid",
      borderWidth: "0",
      alignItems: "center",
      ...sx,
    }}
  >
    <Text
      sx={{
        flex: 1,
        fontWeight: "bold",
        mr: 2,
        py: 2,
        textAlign: "right",
      }}
    >
      {years}
      <br />
      years
    </Text>
    <Text
      sx={{
        flex: 3,
        ml: 2,
      }}
    >
      {skills.join("\n")}
    </Text>
  </Flex>
)

const Profile = () => (
  <Flex
    sx={{
      alignItems: "center",
      flexDirection: "column",
      margin: "0 auto",
      maxWidth: 800,
      py: 8,
    }}
  >
    <Text
      sx={{
        flex: 1,
        lineHeight: "150%",
      }}
    >
      {cv.statement.join(" ")}
    </Text>
    <Flex flex={1} alignSelf="stretch">
      <Experience years="10+" skills={["C# .net", "Agile Delivery"]} />
      <Experience
        years="5+"
        skills={["React", "NodeJS"]}
        sx={{
          borderWidth: "0 1px",
        }}
      />
      <Experience years="3+" skills={["React Native", "Remote Working"]} />
    </Flex>
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
