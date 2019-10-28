import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { FooterContainer } from "./styled-components/FooterStyle";

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
      <Navbar className="nav" expand="lg" sticky="bottom">
           <Navbar.Brand className="nav-link logo" href="/">ATLANTA CYCLE GYM</Navbar.Brand>  
            <Nav className="mr-auto">
              <Nav.Link className="nav-link" href="/">HOME</Nav.Link>
              <Nav.Link className="nav-link" href="/exercises/">TRAINING</Nav.Link>
              <Nav.Link className="nav-link" href="/recipes/">RECIPES</Nav.Link>
              <Nav.Link className="nav-link" href="/shop/">SHOP</Nav.Link>
              <Nav.Link className="nav-link" href="/members/">MEMBERSHIP</Nav.Link>      
            </Nav>
        </Navbar>
</FooterContainer>
    );
  }
}

export default Footer;