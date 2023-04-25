import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = ({ title }) => {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand>{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
