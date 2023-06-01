import React from 'react'
import { Badge, Button, Col, Container, Form, Row } from 'react-bootstrap'
import Sidebar from '../../components/shared/Sidebar/Sidebar'
import Header from '../../components/shared/Header/Header'
import { sampleUser } from '../../assets/assets'

const Skills = () => {
  const skills = ['Javascript', 'ReactJS', 'UI/Design', 'PHP Development']

  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col xs={10}>
          <Header userImage={sampleUser} />
          <div style={{ padding: 24 }}>
            <h2>Skill Search</h2>
            <p style={{ marginTop: 36 }}>
              Please select skill you want to filter
            </p>

            <div style={{ marginTop: 26 }}>
              <h5>HOT SKILLS</h5>

              {skills.map((skillItem) => (
                <>
                  <Badge bg="secondary">{skillItem}</Badge>{' '}
                </>
              ))}
            </div>

            <div style={{ marginTop: 72 }}>
              <h5>OTHER SKILLS</h5>

              {skills.map((skillItem) => (
                <>
                  <Badge bg="secondary">{skillItem}</Badge>{' '}
                </>
              ))}
            </div>

            <div style={{ marginTop: 72 }}>
              <h5>SEARCH</h5>

              <Col md={4} style={{ marginTop: 24 }}>
                <Form.Control
                  placeholder="Search"
                  aria-label="Username"
                  type="search"
                  aria-describedby="basic-addon1"
                />
              </Col>

              <Button
                variant="primary"
                type="submit"
                // onClick={onLoginClick}
                style={{ marginTop: 50, backgroundColor: '#FE725D' }}>
                Continue
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Skills
