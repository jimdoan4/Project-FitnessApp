import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { NavContainer } from "./styled-components/NavStyle";

class Navigation extends Component {
  render() {
    return (
       <NavContainer>
        <Navbar className="nav" expand="lg" fixed="top">
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
       </NavContainer>
    );
  }
}

export default Navigation;
