import React from "react"
import { Box, Flex, Text } from "rebass"

const Stat = ({ label, value }) => (
  <Box mb={3}>
    <Text
      sx={{
        fontSize: 11,
        fontWeight: "bold",
        textTransform: "uppercase",
      }}
    >
      {label}
    </Text>
    <Text>{value}</Text>
  </Box>
)

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
    <Flex
      py={4}
      sx={{
        border: "line",
        borderWidth: "1px 0",
        fontSize: 18,
        lineHeight: "140%",
      }}
    >
      <Flex
        sx={{
          flex: 2,
          flexDirection: "column",
          fontWeight: "bold",
          opacity: 0.5,
          textAlign: "right",
        }}
      >
        <Text>{from}</Text>
        <Text>&ndash; {to}</Text>
      </Flex>
      <Flex flexDirection="column" flex={3} px={7}>
        <Text fontWeight="bold">{jobTitle}</Text>
        <Text>{employer.name}</Text>
      </Flex>
      <Box flex={2} />
    </Flex>
    <Flex py={4}>
      <Flex flex={2} flexDirection="column" sx={{ textAlign: "right" }}>
        <Stat label="Team Size" value={teamSize} />
        <Stat label="Location" value={location} />
        <Stat label="Project Type" value={projectType.join(", ")} />
      </Flex>
      <Flex flex={3} flexDirection="column" px={7}>
        {bullets.map((b, i) => (
          <Text key={i} mb={2}>
            {b}
          </Text>
        ))}
      </Flex>
      <Flex flex={2} flexDirection="column">
        {technology.map((t, i) => (
          <Text key={i} fontWeight="bold" fontSize={11}>
            {t}
          </Text>
        ))}
      </Flex>
    </Flex>
  </Flex>
)
