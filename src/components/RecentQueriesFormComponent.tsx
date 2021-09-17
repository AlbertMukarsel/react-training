import React, { ReactElement } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Container,
  Heading,
} from "@chakra-ui/react";

export function RecentQueriesFormComponent(): ReactElement {
  return (
    <Container maxW="container.lg" marginTop="3rem">
      <Heading textAlign="center">Virus Analyzer</Heading>

      <FormControl id="url" textAlign="center" isRequired>
        <FormLabel textAlign="center">Select your file here</FormLabel>
        <Input type="url" />
        <FormHelperText>The max.size admitted is 32MB per file</FormHelperText>
        <Button mt={4} colorScheme="blue" type="submit">
          Send
        </Button>
      </FormControl>
    </Container>
  );
}
