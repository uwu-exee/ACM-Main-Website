import React from 'react'
import { Link } from 'react-router-dom'

import './navi.scss'
import 'bootstrap/dist/css/bootstrap.css';
import logo from './acmlogo1.png';

import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebookF, faSnapchatGhost } from "@fortawesome/free-brands-svg-icons"


class Navi extends React.Component {
  componentDidMount() {

    let querytHomePage = document.querySelector('#homepage');
    let findHomepage = document.getElementById('homepage');

    if (querytHomePage.href == window.location.href) {
      findHomepage.classList.add("disappear");
    }
    
    window.addEventListener('scroll', function () {
      //console.log('scrolling');
      let y = window.scrollY;
      const navbar = document.getElementById('navb');

      if (y > 400) {
        //console.log(y)
        navbar.classList.add("disappear")
      } else {
        navbar.classList.remove("disappear");
      }
      
    });
    // TODO: Add class once the page is refreshed
  }

  render() {
    return (
      <Navbar collapseOnSelect fixed="top" id="navb" expand="lg" variant="dark">
        <Navbar.Brand id="homepage" href="/">
          <img
            src={logo}
            width="90"
            height="50"
            className="d-inline-block align-top"
            alt="ACM logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="about us" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/aboutus"><div className="nav-dropdown-text">about us</div></NavDropdown.Item>
              <NavDropdown.Item href="/board"><div className="nav-dropdown-text">our board</div></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="programs" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/projects"><div className="nav-dropdown-text">Project Workshops</div></NavDropdown.Item>
              <NavDropdown.Item href="/professional"><div className="nav-dropdown-text">Professional Workshops</div></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/events">calendar</Nav.Link>
          </Nav>
          <Nav.Link href="/membership"><Button variant="light">Membership</Button></Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navi;
