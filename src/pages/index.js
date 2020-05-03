import React from "react"
import { Box, Flex, Text } from "rebass"

import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Box
      sx={{
        backgroundColor: "#303030",
        bottom: 0,
        color: "#f2f2f2",
        fontFamily: "Inter",
        left: 0,
        lineHeight: "150%",
        position: "absolute",
        right: 0,
        top: 0,
      }}
    >
      <Flex flexDirection="column">
        <Flex flexDirection="column">
          <Text
            sx={{
              fontSize: 36,
              lineHeight: "105%",
              textTransform: "uppercase",
            }}
          >
            <strong>Charles</strong>&nbsp;P.
            <br />
            <strong>Oliver</strong>
          </Text>
          <Text
            sx={{
              color: "#ccc",
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            Front-end Architect &amp;
            <br />
            Full-stack Developer
          </Text>
          <Text
            sx={{
              //
              color: "#a2a2a2",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            UK-based Remote Consulting
          </Text>
        </Flex>
        <Flex
          sx={{
            backgroundColor: "tomato",
            borderRadius: "1000px",
            height: 80,
            width: 204,

            left: "50%",
            ml: -102,
            mt: 20,
            position: "absolute",
            top: "50%",
            zIndex: 999,
          }}
        >
          <Box>li</Box>
          <Box>gh</Box>
          <Box>db</Box>
        </Flex>
        <Flex flexDirection="column">
          <p>Specialising In:</p>
          <p>React • React Native</p>
          <p>Node • TypeScript • GraphQL</p>
          <p>Agile • TDD • UX</p>
        </Flex>
        <Flex>
          <p>Download CV/Resumé</p>
          <p>docx</p>
          <p>pdf</p>
          <p>md</p>
        </Flex>
      </Flex>
    </Box>
    <Box
      sx={{
        backgroundColor: "white",
        bottom: 0,
        height: "50%",
        left: 0,
        position: "absolute",
        right: 0,
        transform: "skewY(-5deg)",
        transformOrigin: "100%",
        zIndex: 2,
      }}
    />
  </>
)

export default IndexPage
