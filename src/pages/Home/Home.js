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
import withAuth from '../../WithAuth'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const navigate = useNavigate()
  const [userLogin, setUserLogin] = useState({ username: '', password: '' })

  const onLoginClick = async (event) => {
    event.preventDefault()
    console.log(userLogin)
    try {
      const { access_token: accessToken } = await axios.post('https://brm.kierquebral.com/oauth/token', {
        grant_type: 'password',
        client_id: '992f56da-abc9-4fb1-8ff2-5466e6e0c33f',
        client_secret: 'Q6cMnm9EVzPb5abG7Jh8iXHM1AW4GwLIS9dJyVjK',
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

export default withAuth(Home)
