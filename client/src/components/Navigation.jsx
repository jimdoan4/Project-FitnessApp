import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavContainer } from "./styled-components/NavStyle";

class Navigation extends Component {
  render() {
    return (
      <NavContainer>
        <Navbar className="nav" expand="lg" fixed="top">
          {/* <Navbar.Brand className="nav-link" href="/" style={{marginTop: "22px"}}>SUNRISE GYM</Navbar.Brand>  */}
          <Navbar.Toggle
            className="nav-button"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="home-link" href="/">
                HOME
              </Nav.Link>
              <Nav.Link className="nav-link" href="/exercises/">
                TRAINING
              </Nav.Link>
              <Nav.Link className="nav-link" href="/recipes/">
                RECIPES
              </Nav.Link>
              <Nav.Link className="nav-link" href="/shop/">
                SHOP
              </Nav.Link>
            </Nav>
            {/* <Nav.Link>
              <img
                src="https://svgshare.com/i/5fq.svg"
                width="32"
                style={{ width: "30px" }}
              />
            </Nav.Link>
            <Nav.Link>
              <img
                src="https://svgshare.com/i/5eA.svg"
                width="32"
                style={{ width: "30px" }}
              />
            </Nav.Link>
            <Nav.Link>
              <img
                src="https://svgshare.com/i/5f_.svg"
                width="32"
                style={{ width: "30px" }}
              />
            </Nav.Link> */}
          </Navbar.Collapse>
        </Navbar>
      </NavContainer>
    );
  }
}

export default Navigation;
