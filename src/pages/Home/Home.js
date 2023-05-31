import React from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { illustration, logo } from "../../assets/assets";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const onLoginClick = () => {
    
    axios.post("https://brm.kierquebral.com/oauth/token" ,{
        grant_type:'password', 
        client_id: '992f56da-abc9-4fb1-8ff2-5466e6e0c33f',
        client_secret: 'Q6cMnm9EVzPb5abG7Jh8iXHM1AW4GwLIS9dJyVjK',
        username: 'employee@sample.com',
        password: 'sample'
    }, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
  //   const requestOptions = {
  //     method: 'POST',
  //     // headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(
  //       { grant_type:'password', 
  //         client_id: '992f56da-abc9-4fb1-8ff2-5466e6e0c33f',
  //         client_secret: 'Q6cMnm9EVzPb5abG7Jh8iXHM1AW4GwLIS9dJyVjK',
  //         username: 'employee@sample.com',
  //         password: 'sample'
  //       }
  //     )
  // };

  //   fetch("https://brm.kierquebral.com/oauth/token",requestOptions )
  //   .then(response => console.log(response.status))
  //   .catch(error => console.log(error))
    navigate("/user-profile");
  };

  return (
    <Container className="border" style={{ marginTop: 120 }}>
      <Row>
        <Col style={{ padding: 110 }}>
          <Row>
            <Col>
              <Image
                src={illustration}
                width={380}
                style={{ display: "block" }}
              />
            </Col>
            <Col>
              <div>
                <Image
                  src={logo}
                  width={215}
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
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
  );
};

export default Home;
