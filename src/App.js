import React, { Component } from 'react';
import './App.css';
import { Navbar, NavItem, Nav, MenuItem, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router';
import logo from './images/angelLogo.png';

class App extends Component {
  render() {
    return (
      <div className="bodyStyle">
        <div className="navPadding">
          <Navbar bsStyle="" /*This just takes away some of the default styling*/>
            <Navbar.Header className="brand">
              ANGELIQUE <Link to="/"><img className="logo" src={logo} alt="Angelique Lazarus logo" /></Link> LAZARUS
            <Navbar.Toggle  className="toggler" /*This makes sure there's a hamburger on mobile*//>
            
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight className="customNav">
                <NavItem eventKey={1}><Link to="/">Portfolio</Link></NavItem>
                <NavItem eventKey={2} href="https://drive.google.com/open?id=0B3KezJtvS9TAemNqTV9tcWJmVm8" target="_blank">Résumé</NavItem>
                <NavDropdown eventKey={3} title="Blogs" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1} href="http://chocolatycoding.com" target="_blank">Chocolaty Coding</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.2} href="http://prettygirlrok.blogspot.com" target="_blank">Pretty Girl R.O.K.</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3} href="http://lettersofacceptance.com" target="_blank">Letters of Acceptance</MenuItem>
                </NavDropdown>
                <NavItem eventKey={5}><Link to="about">About</Link></NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
