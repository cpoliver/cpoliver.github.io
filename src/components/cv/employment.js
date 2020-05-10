import React from "react"
import { Box, Flex, Text } from "rebass"

export const Employment = ({
  jobTitle,
  employer,
  from,
  to,
  bullets,
  teamSize,
  location,
  projectType,
  technology,
}) => (
  <Flex flexDirection="column">
    <Flex py={4}>
      <Flex
        sx={{
          flex: 1,
          flexDirection: "column",
          fontWeight: "bold",
          opacity: 0.5,
          textAlign: "right",
        }}
      >
        <Text>{from}</Text>
        <Text>&ndash; {to}</Text>
      </Flex>
      <Flex flexDirection="column" flex={2} px={4}>
        <Text fontWeight="bold">{jobTitle}</Text>
        <Text>{employer.name}</Text>
      </Flex>
      <Box flex={1} />
    </Flex>
    <Flex>
      <Flex flex={1} flexDirection="column" sx={{ textAlign: "right" }}>
        <Box>
          <Text>Team Size</Text>
          <Text>{teamSize}</Text>
        </Box>
        <Box>
          <Text>Location</Text>
          <Text>{location}</Text>
        </Box>
        <Box>
          <Text>Project Type</Text>
          <Text>{projectType}</Text>
        </Box>
      </Flex>
      <Flex flex={2} flexDirection="column" px={4}>
        {bullets.map((b, i) => (
          <Box key={i}>{b}</Box>
        ))}
      </Flex>
      <Flex flex={1} flexDirection="column">
        {technology.map((t, i) => (
          <Box key={i}>{t}</Box>
        ))}
      </Flex>
    </Flex>
  </Flex>
)
