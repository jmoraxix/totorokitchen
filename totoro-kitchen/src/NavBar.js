import React from 'react';
import {
  List,
  Navbar,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import "./css/NavBar.css";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar id="sidebar">
          <Nav navbar>
            <List type="unstyled">
              <NavItem>
                <NavLink href="/">Crear reserva</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/test">Mis reservas</NavLink>
              </NavItem>
              <NavItem data-toggle="collapse">
                <NavLink href="#homeSubmenu">Home Submenu</NavLink>
                <List className="collapse unstyled" id="homeSubmenu">
                  <NavItem>
                    <NavLink href="/">Mis reservas</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">Mi cuenta</NavLink>
                  </NavItem>
                </List>
              </NavItem>
            </List>
          </Nav>
        </Navbar>
      </div>
    );
  }
}