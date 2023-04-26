import React from "react";
import { Container, Image, Navbar, Row } from "react-bootstrap";

const Header = ({ title, userName, userImage }) => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">BenchEase</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Image src={userImage} roundedCircle width={52} />

          <div style={{ marginLeft: 16 }}>
            <h5>{userName}</h5>
            {/* <p>UI/UX Designer</p> */}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
