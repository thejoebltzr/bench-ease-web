import React, { useState } from 'react'
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
import axios from 'axios'
// import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { access_token: accessToken } = await axios.post('https://brm.kierquebral.com/oauth/token', {
        grant_type: 'password',
        client_id: '992f56da-abc9-4fb1-8ff2-5466e6e0c33f',
        client_secret: 'Q6cMnm9EVzPb5abG7Jh8iXHM1AW4GwLIS9dJyVjK',
        username: 'employee@sample.com',
        password: 'sample'
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }).then((response) => {
        return response.data
      })
      // eslint-disable-next-line camelcase
      // const { access_token } = await response.json()
      console.log(accessToken)
      localStorage.setItem('token', accessToken)
      navigate('/')
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
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

              <Form style={{ marginTop: 46 }} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="email"
                    name="username"
                    placeholder="Enter email"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </Form.Group>

                <ButtonGroup className="d-flex">
                  <Button
                    variant="primary"
                    type="submit"
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

export default Login
