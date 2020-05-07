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
      // backgroundColor: "rgba(0,0,0,0.25)",
      height: "100%",
      // minHeight: 667,
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
      backgroundColor: "rgba(255,255,255,0.2)",
      flex: 1,
      flexDirection: "column",
      alignItems: "flex-start",
      // height: "50%",
      justifyContent: "center",
    }}
  >
    <Flex
      sx={{
        backgroundColor: "rgba(255,255,255,0.2)",
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
      backgroundColor: "rgba(0,0,0,0.2)",
      color: "background",
      flex: 1,
      flexDirection: "column",
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
      <Text>Specialising In:</Text>
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
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Text>Download CV/Resumé</Text>
      <Text>docx</Text>
      <Text>pdf</Text>
      <Text>md</Text>
    </Flex>
  </Flex>
)

const SocialIcon = props => (
  <Box
    {...props}
    sx={{
      m: 16,
      size: 48,
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
