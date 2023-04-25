import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import Header from "../../components/shared/Header/Header";

const Settings = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col xs={10}>
          <Header />
          <div style={{ padding: 24 }}>
            <h2>Settings</h2>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Settings;
