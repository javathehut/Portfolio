import React, { Component } from 'react';
import './App.css';
// import { Navbar, NavItem, Nav, MenuItem, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router';
import logo from './images/angelLogo.png';
import download from './images/download.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class App extends Component {

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
        <Navbar color="faded" light expand="md">
          <NavbarBrand className="brand" href="/">ANGELIQUE <img className="logo" src={logo} alt="Angelique Lazarus logo" /> LAZARUS</NavbarBrand>
          <NavbarBrand className="brandSmallScreen" href="/"><img className="logo" src={logo} alt="Angelique Lazarus logo" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto customNav" navbar>
            <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Blogs
            </DropdownToggle>
            <DropdownMenu >
              <DropdownItem href="http://chocolatycoding.com" target="_blank" rel="noopener noreferrer">
              Chocolaty Coding
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="http://prettygirlrok.blogspot.com" target="_blank" rel="noopener noreferrer">
              Pretty Girl R.O.K.
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="http://lettersofacceptance.com" target="_blank" rel="noopener noreferrer">
              Letters of Acceptance
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
              <NavItem>
                <NavLink href="about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://drive.google.com/open?id=0B3KezJtvS9TAemNqTV9tcWJmVm8" target="_blank" rel="noopener noreferrer"><img className="download" src={download} alt="download icon" />Résumé</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Portfolio</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
