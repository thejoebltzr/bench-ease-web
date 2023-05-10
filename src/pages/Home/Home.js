import React from 'react'
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  Image,
  Row
} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { illustration, logo } from '../../assets/assets'
import withAuth from '../../WithAuth'

const Home = () => {
  const navigate = useNavigate()

  const onLoginClick = () => {
    navigate('/dashboard')
  }

  return (
    <Container className="border" style={{ marginTop: 120 }}>
      <Row>
        <Col style={{ padding: 110 }}>
          <Row>
            <Col>
              <Image
                src={illustration}
                width={380}
                style={{ display: 'block' }}
              />
            </Col>
            <Col>
              <div>
                <Image
                  src={logo}
                  width={215}
                  style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}
                />
              </div>

              <Form style={{ marginTop: 46 }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <ButtonGroup className="d-flex">
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={onLoginClick}
                    style={{ marginTop: 28 }}>
                    Login
                  </Button>
                </ButtonGroup>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default withAuth(Home)
