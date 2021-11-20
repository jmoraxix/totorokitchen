import React from 'react';
import {
  List,
  Navbar,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import "./css/NavBar.css";
import { Collapse } from 'react-collapse';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleAdmin = this.toggleAdmin.bind(this);
    this.state = {
      adminOpen: true
    };
  }

  toggleAdmin() {
    this.setState({
      adminOpen: !this.state.adminOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar id="sidebar">
          <Nav navbar>
            <h4>Navegaci&oacute;n</h4>
            <List type="unstyled">
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <Collapse isOpened={this.props.usuario}>
                <NavItem>
                  <NavLink href="/pais">Mi usuario</NavLink>
                </NavItem>
              </Collapse>    
              <NavItem>
                <NavLink onClick={this.toggleAdmin}>Administraci&oacute;n</NavLink>
              </NavItem>
              <Collapse isOpened={this.state.adminOpen}>
                <NavItem>
                  <NavLink href="/pais">Paises</NavLink>
                </NavItem>
              </Collapse>  
              <NavItem>
                <NavLink href="/topics">Topics</NavLink>
              </NavItem>          
            </List>
          </Nav>
        </Navbar>
      </div>
    );
  }
}