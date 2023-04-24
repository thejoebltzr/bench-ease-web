import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../../components/shared/Sidebar/Sidebar";

const Skills = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col xs={10}>
          <h2>Skills</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
