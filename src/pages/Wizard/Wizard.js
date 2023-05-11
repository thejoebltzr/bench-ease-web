import React from 'react'
import {
  Col,
  Container,
  Image,
  Row
} from 'react-bootstrap'
import { illustration, logo } from '../../assets/assets'
import withAuth from '../../WithAuth'

const Wizard = () => {
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

              <h2>Welcome to Benchease</h2>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default withAuth(Wizard)
