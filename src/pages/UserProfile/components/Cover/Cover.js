import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { sampleUserLarge } from "../../../../assets/assets";
import colors from "../../../../theme/colors";

const Cover = () => {
  return (
    <Container>
      <Row className="border" style={{ borderRadius: 10, overflow: "hidden" }}>
        <div
          style={{
            height: 136,
            zIndex: -1,
            backgroundColor: colors.coral,
          }}></div>

        <Row style={{ position: "relative", top: -80 }}>
          <Col sm={2}>
            <Image src={sampleUserLarge} width={157} rounded />
          </Col>
          <Col sm={10}>
            <h3 style={{ color: colors.white }}>John Doe</h3>
            <p style={{ color: colors.white }}>UI/UX Designer</p>
            <Row style={{ padding: 16 }}>
              <Col sm>
                <div>
                  <p>Hybrid</p>
                  <p>Codev Talent Mgmt.</p>
                </div>
              </Col>
              <Col sm>
                <div>
                  <p>7:00AM - 4:00PM </p>
                  <p>Tuesday - Saturday</p>
                </div>
              </Col>
              <Col sm>
                <div>
                  <p>johnd@codev.com </p>
                  <p>09123456789</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Cover;
