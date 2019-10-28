import React, { Component } from "react";
// import { Nav } from "react-bootstrap";
// import { Navbar } from "react-bootstrap";
import { FooterContainer } from "./styled-components/FooterStyle";

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <div class="footer">
          <div class="contain">
            <div class="col">
              <h1>Company</h1>
              <ul>
                <li>About</li>
                <li>Mission</li>
                <li>Services</li>
               
              </ul>
            </div>
            <div class="col">
              <h1>Products</h1>
              <ul>
                <li>About</li>
                <li>Mission</li>
                <li>Services</li>
                
              </ul>
            </div>
            <div class="col">
              <h1>Accounts</h1>
              <ul>
                <li>About</li>
                <li>Mission</li>
                <li>Services</li>
              
              </ul>
            </div>
            <div class="col">
              <h1>Resources</h1>
              <ul>
                <li>Webmail</li>
                <li>Redeem code</li>
                <li>WHOIS lookup</li>
              
              </ul>
            </div>
            <div class="col">
              <h1>Support</h1>
              <ul>
                <li>Contact us</li>
                <li>Web chat</li>
                <li>Open ticket</li>
              </ul>
            </div>
            <div class="col social">
              <h1>Social</h1>
              <ul>
                <li>
                  <img
                    src="https://svgshare.com/i/5fq.svg"
                    width="32"
                    style={{ width: "32px" }}
                  />
                </li>
                <li>
                  <img
                    src="https://svgshare.com/i/5eA.svg"
                    width="32"
                    style={{ width: "32px" }}
                  />
                </li>
                <li>
                  <img
                    src="https://svgshare.com/i/5f_.svg"
                    width="32"
                    style={{ width: "32px" }}
                  />
                </li>
              </ul>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
        {/* <Navbar className="nav" expand="lg" sticky="bottom">
           <Navbar.Brand className="nav-link logo" href="/">ATLANTA CYCLE GYM</Navbar.Brand>  
            <Nav className="mr-auto">
              <Nav.Link className="nav-link" href="/">HOME</Nav.Link>
              <Nav.Link className="nav-link" href="/exercises/">TRAINING</Nav.Link>
              <Nav.Link className="nav-link" href="/recipes/">RECIPES</Nav.Link>
              <Nav.Link className="nav-link" href="/shop/">SHOP</Nav.Link>
              <Nav.Link className="nav-link" href="/members/">MEMBERSHIP</Nav.Link>      
            </Nav>
        </Navbar> */}
      </FooterContainer>
    );
  }
}

export default Footer;
