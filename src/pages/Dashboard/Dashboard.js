import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import Table from "../../components/shared/Table/Table";
import Header from "../../components/shared/Header/Header";
import { sampleUser } from "../../assets/assets";

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col xs={10}>
          <Header userImage={sampleUser} />
          <div style={{ padding: 24 }}>
            <h2>Profile Search</h2>
            <Col md={4} style={{ marginTop: 54 }}>
              <Form.Control
                placeholder="Search"
                aria-label="Username"
                type="search"
                aria-describedby="basic-addon1"
              />
            </Col>

            <div style={{ marginTop: 42 }}>
              <Table />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
