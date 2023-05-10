import React from 'react'
import { Container, Image, Navbar } from 'react-bootstrap'
import PropTypes from 'prop-types'

const Header = ({ userName, userImage }) => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">BenchEase</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Image src={userImage} roundedCircle width={52} />

          <div style={{ marginLeft: 16 }}>
            <h5>{userName}</h5>
            {/* <p>UI/UX Designer</p> */}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

Header.propTypes = {
  userName: PropTypes.string,
  userImage: PropTypes.string
}

export default Header
