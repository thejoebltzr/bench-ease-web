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

const Login = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
     const formdata = new FormData()
      formdata.append('grant_type', 'password')
      formdata.append('client_id', '991776b6-5d85-4149-91a5-5a627e247c00')
      formdata.append('client_secret', 'yhe2Uzjj4SI3t8KRPxQIqtVnu8VEiKC3FOmU26Kx')
      formdata.append('username', formData.username)
      formdata.append('password', formData.password)
      formdata.append('scope', '')

      const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
        mode: 'no-cors',
      }

      const response = await fetch('https://brm.kierquebral.com/oauth/token', requestOptions)
      if (!response.ok) {
        throw new Error('Authentication failed')
      }

      // eslint-disable-next-line camelcase
      const { access_token } = await response.json()
      localStorage.setItem('token', access_token)
      navigate('/')
    } catch (error) {
      console.error(error)
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
