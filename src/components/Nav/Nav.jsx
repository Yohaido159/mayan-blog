import React, { useState } from "react";

import "./Nav.styles.scss";

import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from "reactstrap";

import { Link } from "react-router-dom";

const NavHeader = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-main">
      <Navbar className="navbar-my" color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        {/* <Collapse isOpen={isOpen} navbar> */}
        <Nav className="mx-auto" navbar>
          <NavItem>
            <NavLink className="nav-item-my" tag={Link} to="me/">
              עוגות
              <div className="nav-item-my__dropdown">
                <ul>
                  <li className="nav-item-my__item">mayan</li>
                  <li className="nav-item-my__item">mayan</li>
                  <li className="nav-item-my__item">mayan</li>
                </ul>
              </div>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink tag={Link} to="me/">
              קינוחים
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="me/">
              מאפים
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="me/">
              ארוחות
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="edit/">
              ערוך
            </NavLink>
          </NavItem>
        </Nav>
        {/* </Collapse> */}
      </Navbar>
    </div>
  );
};

export default NavHeader;
