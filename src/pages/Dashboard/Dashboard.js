import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import Table from "../../components/shared/Table/Table";

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col xs={10}>
          <h2>Profile Search</h2>
          <Col md={3}>
            <Form.Control
              placeholder="Search"
              aria-label="Username"
              type="search"
              aria-describedby="basic-addon1"
            />
          </Col>

          <Table />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
