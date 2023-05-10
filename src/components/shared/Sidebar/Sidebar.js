import React from 'react'
import { Nav, Image } from 'react-bootstrap'
import './Sidebar.css'
import { logoSymbolWhite } from '../../../assets/assets'

const Sidebar = () => {
  return (
    <Nav
      className="col-md-2 d-none d-md-block sidebar"
      style={{ backgroundColor: '#FE725D' }}>
      <div className="sidebar-sticky" style={{ marginBottom: 24 }}>
        <Image
          src={logoSymbolWhite}
          width={90}
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        />
      </div>

      <Nav.Item>
        <Nav.Link
          href="/dashboard"
          style={{ color: '#FFF', fontWeight: 'bold' }}>
          Dashboard
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="link-1"
          href="/skills"
          style={{ color: '#FFF', fontWeight: 'bold' }}>
          Skills
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="link-2"
          href="/settings"
          style={{ color: '#FFF', fontWeight: 'bold' }}>
          Settings
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="link-3"
          href="/"
          style={{ color: '#FFF', fontWeight: 'bold' }}>
          Logout
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

// export default withRouter(Sidebar);

export default Sidebar
