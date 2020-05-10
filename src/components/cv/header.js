import React from "react"
import { Flex, Text } from "rebass"

import cv from "../../data/cv.json"

export const Header = () => (
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
        pt: 7,
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
        mt: 6,
        opacity: 0.8,
      }}
    >
      <Text
        sx={{
          border: "line",
          borderLeftWidth: 0,
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
          border: "line",
          borderWidth: "1px 0",
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
