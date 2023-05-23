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
// import { useNavigate } from 'react-router-dom'
import { illustration, logo } from '../../assets/assets'
// import axios from 'axios'

const Login = () => {
  // const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      // const formdata = new FormData()
      // formdata.append('grant_type', 'password')
      // formdata.append('client_id', '992f56da-abc9-4fb1-8ff2-5466e6e0c33f')
      // formdata.append('client_secret', 'Q6cMnm9EVzPb5abG7Jh8iXHM1AW4GwLIS9dJyVjK')
      // formdata.append('username', formData.username)
      // formdata.append('password', formData.password)
      // formdata.append('scope', '')

      // const formData = {
      //   grant_type: 'password',
      //   client_id: '992f56da-abc9-4fb1-8ff2-5466e6e0c33f',
      //   client_secret: 'Q6cMnm9EVzPb5abG7Jh8iXHM1AW4GwLIS9dJyVjK',
      //   username: 'employee@sample.com',
      //   password: 'sample'
      // }

      // console.log(formData)

      // const requestOptions = {
      //   method: 'POST',
      //   body: {},
      //   redirect: 'follow',
      //   mode: 'no-cors'
      // }

      const response = await fetch('https://dunhilldale.com/bench-ease/public/oauth/token', {
        method: 'POST',
        body: {
          grant_type: 'password',
          client_id: '98fb8a9e-b05e-40e0-a61d-cd478a5709eb',
          client_secret: 'LhNsTIrsL3tJcDM141ihAHTogQpc7gYOc5kjYrUg',
          username: 'admin@sample.com',
          password: 'sample',
          scope: ''
        },
        mode: 'no-cors'
      })

      console.log(response)
      // const response = await fetch('https://brm.kierquebral.com/oauth/token', {
      //   method: 'POST',
      //   headers: {
      //     'Content-type': 'application/json; charset=UTF-8'
      //   },
      //   redirect: 'follow',
      //   body: formData,
      //   mode: 'no-cors'
      // })

      // if (response.status === 422 || response.status === 401) {
      //   return response
      // }

      // if (!response.ok) {
      //   throw new Error('Authentication failed')
      // }

      // eslint-disable-next-line camelcase
      // const { access_token } = await response.json()
      // localStorage.setItem('token', access_token)
      // navigate('/')
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
