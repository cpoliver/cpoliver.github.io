import React from "react"
import { Box, Flex, Link, Text } from "rebass"

import { Dribbble, Github, Linkedin } from "../components/socialIcon"
import { Layout } from "../components/layout"
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
      maxWidth: 1280,
      minHeight: 320,
      minWidth: 375,
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
        mx: 6,
        my: [3, 9],
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
          lineHeight: "120%",
          my: [3, 4],
          opacity: 0.8,
        }}
      >
        Front-End Architect &amp;
        <br />
        Full-Stack Developer
      </Text>
      <Text
        sx={{
          flex: 1,
          opacity: 0.6,
          textTransform: "uppercase",
        }}
      >
        UK-Based Remote Consulting
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
        my: [3, 9],
      }}
    >
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          flexDirection: "column",
          fontSize: 18,
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
      <Box
        sx={{
          alignSelf: "center",
          display: "none", // TODO: re-enable
          fontWeight: "bold",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        <Text
          sx={{
            borderWidth: 2,
            borderColor: "background",
            borderRadius: 4,
            borderStyle: "solid",
            p: 3,
            px: 4,
          }}
        >
          View CV/Resumé
        </Text>
      </Box>
    </Flex>
  </Flex>
)

const SocialIcon = ({ href, ...props }) => (
  <Link href={href} target="_blank">
    <Box
      {...props}
      sx={{
        m: 3,
        size: 36,
        backgroundColor: "background",
        borderRadius: "50%",
        boxShadow: "sm",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
    />
  </Link>
)

const Floating = () => (
  <Flex
    sx={{
      backgroundColor: "muted",
      borderRadius: "1000px",
      boxShadow: "md",
      position: "absolute",
      zIndex: 99,
    }}
  >
    <SocialIcon href="https://linkedin.com/in/cpoliver">
      <Linkedin />
    </SocialIcon>
    <SocialIcon href="https://github.com/cpoliver">
      <Github />
    </SocialIcon>
    <SocialIcon href="https://dribbble.com/cpoliver">
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
    <Layout>
      <Outer>
        <Floating />
        <Inner>
          <Top />
          <Bottom />
        </Inner>
        <Background />
      </Outer>
    </Layout>
  </>
)

export default IndexPage
