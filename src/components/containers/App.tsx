import React, { ReactElement } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../Navbar";

function App(): ReactElement {
  return (
    <ChakraProvider>
      <Navbar />
    </ChakraProvider>
  );
}

export default App;
