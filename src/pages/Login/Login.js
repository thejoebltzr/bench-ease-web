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
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()
  const [userLogin, setUserLogin] = useState({ username: '', password: '' })

  const onLoginClick = async (event) => {
    event.preventDefault()
    try {
      const { access_token: accessToken } = await axios.post('https://brm.kierquebral.com/oauth/token', {
        grant_type: 'password',
        client_id: '994da195-3c54-47f5-8022-57da72d56148',
        client_secret: '0bzG2xAsOtQypRSNAxgN8Lqc53U0DS2TBencfyiT',
        username: userLogin.username,
        password: userLogin.password
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
      navigate('/user-profile')
    } catch (error) {
      alert('Invalid username/password')
    }
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
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" value={userLogin.username} placeholder="Enter email"
                  onChange={(event) => setUserLogin((prevState) => {
                    return {
                      ...prevState,
                      username: event.target.value
                    }
                  })} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" value={userLogin.password} placeholder="Password"
                   onChange={(event) => setUserLogin((prevState) => {
                     return {
                       ...prevState,
                       password: event.target.value
                     }
                   })} />
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

export default Login
