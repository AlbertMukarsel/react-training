import * as React from 'react';
import { ChakraProvider, Button } from '@chakra-ui/react';
import styled from 'styled-components';

const MyButton = styled.button`
    background: palevioletred;
    color: white;
`
const ChakraCustomButton = styled(Button)`
    background-color: yellow;
`

function App() {
    return (
        < ChakraProvider >
            <div>Hola mundo</div>
            <Button colorScheme="blue">Button</Button>
            <MyButton>Button2</MyButton>
            <ChakraCustomButton>Button3</ChakraCustomButton>
        </ChakraProvider >
    )
}

export default App;