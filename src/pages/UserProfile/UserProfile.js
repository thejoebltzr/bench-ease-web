import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import { sampleUser } from "../../assets/assets";
import Header from "../../components/shared/Header/Header";
import Cover from "./components/Cover/Cover";

const UserProfile = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col xs={10}>
          <Header userImage={sampleUser} />

          <Cover />
          <Card>
            <Container>
              <h6>Primary Skills</h6>
              <h6>Additional Skills</h6>
            </Container>
          </Card>

          <Card>
            <Container>
              <h6>Project History</h6>
            </Container>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
