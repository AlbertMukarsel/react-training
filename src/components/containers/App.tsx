import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Router from '../../Router';
import Navbar from "../Navbar";
import UrlFormComponent from '../UrlFormComponent';

function App() {
    return (
        < ChakraProvider >
            <Navbar />
            <UrlFormComponent />
        </ChakraProvider >
    )
}

export default App;