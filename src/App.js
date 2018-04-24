import React, { Component } from 'react';

import { MenuItem,Navbar, NavDropdown, Nav, NavItem } from 'react-bootstrap';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar>
              <Navbar.Header>
                  <Navbar.Brand>
                      <a href="">React-Bootstrap</a>
                  </Navbar.Brand>
              </Navbar.Header>
              <Nav>
                  <NavItem eventKey={1} href="#">
                      Link
                  </NavItem>
                  <NavItem eventKey={2} href="#">
                      Link
                  </NavItem>
                  <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                      <MenuItem eventKey={3.1}>Action</MenuItem>
                      <MenuItem eventKey={3.2}>Another action</MenuItem>
                      <MenuItem eventKey={3.3}>Something else here</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey={3.4}>Separated link</MenuItem>
                  </NavDropdown>
              </Nav>
          </Navbar>;
      </div>
    );
  }
}


