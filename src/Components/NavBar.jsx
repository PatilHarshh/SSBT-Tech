import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand>
<<<<<<< HEAD
            {/* <img src={logo} alt="Logo" /> */}
=======
            <img id="logo" src={logo} alt="Logo" />
>>>>>>> c109ff2de215ffaa7678c91ff79310ba1481e958
            <h4 className="text-light">SSBT's Coding Club</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={HashLink} to='/' className="navbar-link">Home</Nav.Link>
            <Nav.Link as={HashLink} to='/events' className="navbar-link">Events</Nav.Link>
            <Nav.Link as={HashLink} to='/about' className="navbar-link">About</Nav.Link>
            <Nav.Link as={HashLink} to='/blogs' className="navbar-link">Blogs</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href=""><img src={navIcon1} alt="" /></a>
              <a href=""><img src={navIcon2} alt="" /></a>
              <a href=""><img src={navIcon3} alt="" /></a>
            </div>
            <HashLink to='#connect'>
              <button className="vvd"><span>Let’s Connect</span></button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

