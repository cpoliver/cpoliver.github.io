import React from "react"
import { Box, Flex, Text } from "rebass"

import { Dribbble, Github, Linkedin } from "../components/socialIcon"
import SEO from "../components/seo"

const Outer = props => (
  <Flex
    {...props}
    sx={{
      alignItems: "center",
      bottom: 0,
      justifyContent: "center",
      left: 0,
      lineHeight: "150%",
      overflow: "hidden",
      position: "absolute",
      right: 0,
      top: 0,
    }}
  />
)

const Inner = props => (
  <Flex
    {...props}
    sx={{
      flex: 1,
      flexDirection: "column",
      height: "100%",
      maxHeight: 1080,
      minWidth: 375,
      maxWidth: 1280,
      zIndex: 1,
    }}
  />
)

const Top = () => (
  <Flex
    sx={{
      alignItems: "flex-start",
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <Flex
      sx={{
        mx: 40,
        my: 80,
        flexDirection: "column",
      }}
    >
      <Text
        sx={{
          flex: 1,
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
          flex: 1,
          fontSize: 25,
          fontWeight: "bold",
          my: 24,
          opacity: 0.8,
        }}
      >
        Front-end Architect &amp;
        <br />
        Full-stack Developer
      </Text>
      <Text
        sx={{
          flex: 1,
          fontWeight: "bold",
          opacity: 0.6,
          textTransform: "uppercase",
        }}
      >
        UK-based Remote Consulting
      </Text>
    </Flex>
  </Flex>
)

const Bottom = () => (
  <Flex
    sx={{
      color: "background",
      flex: 1,
      flexDirection: "column",
    }}
  >
    <Flex
      sx={{
        color: "background",
        flex: 1,
        flexDirection: "column",
        my: 80,
      }}
    >
      <Flex
        sx={{
          alignItems: "center",
          flex: 1,
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Text
          sx={{
            borderColor: "#aaa",
            borderStyle: "solid",
            borderWidth: 0,
            borderBottomWidth: 1,
            fontWeight: "bold",
            mb: 2,
            pb: 1,
            px: 2,
            textTransform: "uppercase",
          }}
        >
          Specialising In:
        </Text>
        <Text>
          React • React Native
          <br />
          Node • TypeScript • GraphQL
          <br />
          Agile • TDD • UX
        </Text>
      </Flex>
      <Flex
        sx={{
          alignItems: "flex-end",
          background: "tomato",
          fontWeight: "bold",
          mx: 160,
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        <Box flex={2}>
          <Text>
            Download
            <br />
            CV/Resumé
          </Text>
        </Box>
        <Box flex={1}>
          <Text>docx</Text>
        </Box>
        <Box flex={1}>
          <Text>pdf</Text>
        </Box>
        <Box flex={1}>
          <Text>md</Text>
        </Box>
      </Flex>
    </Flex>
  </Flex>
)

const SocialIcon = props => (
  <Box
    {...props}
    sx={{
      m: 16,
      size: 36,
    }}
  />
)

const Floating = () => (
  <Flex
    sx={{
      backgroundColor: "muted",
      borderRadius: "1000px",
      position: "absolute",
      zIndex: 999,
    }}
  >
    <SocialIcon>
      <Linkedin />
    </SocialIcon>
    <SocialIcon>
      <Github />
    </SocialIcon>
    <SocialIcon>
      <Dribbble />
    </SocialIcon>
  </Flex>
)

const Background = () => (
  <Box
    sx={{
      backgroundColor: "text",
      bottom: 0,
      height: "calc(50% + 4vw)",
      left: 0,
      position: "absolute",
      right: 0,
      transform: "skewY(-5deg)",
      transformOrigin: "100%",
    }}
  />
)

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Outer>
      <Floating />
      <Inner>
        <Top />
        <Bottom />
      </Inner>
      <Background />
    </Outer>
  </>
)

export default IndexPage
