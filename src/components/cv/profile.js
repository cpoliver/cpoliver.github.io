import React from "react"
import { Flex, Text } from "rebass"

import cv from "../../data/cv.json"

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

export const Profile = () => (
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
