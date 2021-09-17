import React, { ReactElement } from "react";
import { InformationArray } from "../utils/types";

import { List, Box, Badge } from "@chakra-ui/react";
import styled from "styled-components";

export function ResultComponent({
  characterList,
}: InformationArray): ReactElement {
  return (
    <List spacing={3}>
      {characterList.map((element) => (
        <Box key={element.id} maxW="sm" borderWidth="1px" borderRadius="lg">
          <img src={element.img_url} alt={element.name} />

          <Box p="5">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              textAlign="center"
              isTruncated
            >
              {element.name}
            </Box>
            <Box textAlign="center">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                {element.status}
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                Origin: {element.origin}
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </List>
  );
}
