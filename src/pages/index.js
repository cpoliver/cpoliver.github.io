import React from "react"
import { Box, Flex, Text } from "rebass"

import { Dribbble, Github, Linkedin } from "../components/socialIcon"
import SEO from "../components/seo"

const Outer = props => (
  <Flex
    {...props}
    sx={{
      alignItems: "center",
      backgroundColor: "#303030",
      bottom: 0,
      color: "#f2f2f2",
      fontFamily: "Inter",
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
      backgroundColor: "rgba(0,0,0,0.25)",
      minHeight: 667,
      maxHeight: 1080,
      minWidth: 375,
      maxWidth: 1280,
      zIndex: 1,
    }}
  />
)

const Top = () => (
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
        color: "#a2a2a2",
        fontWeight: "bold",
        textTransform: "uppercase",
      }}
    >
      UK-based Remote Consulting
    </Text>
  </Flex>
)

const Bottom = () => (
  <Flex>
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
)

const SocialIcon = props => (
  <Box
    {...props}
    sx={{
      color: "white",
      m: 16,
      size: 48,
    }}
  />
)

const Floating = () => (
  <Flex
    sx={{
      backgroundColor: "tomato",
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
      backgroundColor: "white",
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
