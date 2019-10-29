import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { FooterContainer } from "./styled-components/FooterStyle";

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <div className="footer">
          <div className="contain">
            <div className="col">
              <h1>
                {" "}
                <Nav.Link className="footer-link" href="/">
                  HOME
                </Nav.Link>
              </h1>
            </div>
            <div className="col">
              <h1>
                {" "}
                <Nav.Link className="footer-link" href="/exercises/">
                  TRAINING
                </Nav.Link>
              </h1>
            </div>
            <div className="col">
              <h1>
                {" "}
                <Nav.Link className="footer-link" href="/recipes/">
                  RECIPES
                </Nav.Link>
              </h1>
            </div>
            <div className="col">
              <h1>
                {" "}
                <Nav.Link className="footer-link" href="/shop/">
                  SHOP
                </Nav.Link>
              </h1>
            </div>
            <div className="col">
              <h1>
              {" "}
                <Nav.Link className="footer-link" href="/">
                  MEMBERSHIP
                </Nav.Link>
              </h1>
            </div>
            <div className="col social">
              <h1>
                {" "}
                <Nav.Link className="footer-link" href="/shop/">
                  SOCIAL
                </Nav.Link>
              </h1>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </FooterContainer>
    );
  }
}

export default Footer;
