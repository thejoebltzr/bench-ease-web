import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Sidebar from "../../components/shared/Sidebar/Sidebar";
import Header from "../../components/shared/Header/Header";
import Table from "../../components/shared/Table/Table";
import { sampleUser } from "../../assets/assets";

const SkillSearch = () => {

    const DATA = [
        { id: "2021-1578", name:"Doe, John", position:"UI/UX Designer", 
          primary_skills:"Javascript, ReactJS, PHP Dev, WordPress Dev, UI Design...",
          additional_skills:"Quality Assurance, Automation Testing, HTML/CSS..."
        },
    ]

    return (
        <Container fluid>
          <Row>
            <Col xs={2}>
              <Sidebar />
            </Col>
            <Col xs={10}>
              <Header userImage={sampleUser} />
              <div style={{ padding: 24 }}>
                <h2>Search Results</h2>
                <Col md={4} style={{ marginTop: 54 }}>
                  <Form.Control
                    placeholder="Search"
                    aria-label="Username"
                    type="search"
                    aria-describedby="basic-addon1"
                  />
                </Col>
    
                <div style={{ marginTop: 42 }}>
                  <Table data={DATA} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      );
}

export default SkillSearch