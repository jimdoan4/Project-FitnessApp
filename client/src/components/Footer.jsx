import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FooterContainer } from "./styled-components/FooterStyle";

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
      <Navbar className="nav" expand="lg" sticky="bottom">
          {/* <Navbar.Brand className="nav-link" href="/">ATLANTA CYCLE GYM</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto text-center">
              <Nav.Link className="nav-link" href="/">HOME</Nav.Link>
              <Nav.Link className="nav-link" href="/exercises/">TRAINING</Nav.Link>
              <Nav.Link className="nav-link" href="/recipes/">RECIPES</Nav.Link>
              <Nav.Link className="nav-link" href="/shop/">SHOP</Nav.Link>
              <Nav.Link className="nav-link" href="/members/">MEMBERSHIP</Nav.Link>
         
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
</FooterContainer>
    );
  }
}

export default Footer;