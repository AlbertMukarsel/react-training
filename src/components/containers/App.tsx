import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from "../Navbar";

function App() {
    return (
        < ChakraProvider >
            <Navbar />
        </ChakraProvider >
    )
}

export default App;