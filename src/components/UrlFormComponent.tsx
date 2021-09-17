import React, { ReactElement, useState } from 'react';
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
    Container,
    Heading,
} from "@chakra-ui/react"

export function UrlFormComponent():ReactElement {
    
    const [url, setUrl] = useState('')

    return (
        <Container maxW="container.lg" marginTop="3rem">
            <Heading textAlign="center">Virus Analyzer</Heading>

            <FormControl id="url" textAlign="center" isRequired>
                <FormLabel textAlign="center">Insert URL here</FormLabel>
                <Input type="url" value={url} onInput={e => setUrl(e.currentTarget.value)} />
                < FormHelperText > Put the suspicious URL here in order to scan it</FormHelperText >
                <Button
                    mt={4}
                    colorScheme="blue"
                    type="submit"
                >
                    Scan It
                </Button>
            </FormControl>

        </Container>
    )
}