import React from "react";
import { Nav } from "react-bootstrap";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <Nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky"></div>
      <Nav.Item>
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" href="/skills">
          Skills
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" href="/settings">
          Settings
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3" href="/">
          Logout
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

// export default withRouter(Sidebar);

export default Sidebar;
