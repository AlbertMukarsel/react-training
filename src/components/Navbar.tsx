import React, { ReactElement } from "react";
import { Box, Image, Spacer } from "@chakra-ui/react";
import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "../Router";

import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  border-radius: 3rem;
  margin: 1rem;
  background-color: black;
  color: white;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;
  font-weight: bold;
`;
const Logo = styled(Image)``;

function Navbar(): ReactElement {
  return (
    <BrowserRouter>
      <>
        <Nav>
          <Box boxSize="90px">
            <Logo src="" alt="logo" borderRadius="full" />
          </Box>
          <Box w="10%" d="flex" flexDirection="row" paddingEnd="0.8rem">
            <Link to="/">Home</Link>
            <Spacer />
            <Link to="/about">About</Link>
          </Box>
        </Nav>
        <Router />
      </>
    </BrowserRouter>
  );
}

export default Navbar;
