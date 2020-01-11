import React from "react";
import { FooterContainer } from "./styled-components/FooterStyle";

function Footer() {
  return (
    <FooterContainer>
      <footer>
        <section className="contact-area" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="contact-content text-center">
                  <h6>ATLANTA CYCLE CLUB</h6>
                  <div className="contact-social">
                    <ul>
                      <li>
                        <a className="hover-target" href="">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a className="hover-target" href="">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a className="hover-target" href="">
                          <i className="fab fa-github"></i>
                        </a>
                      </li>
                      <li>
                        <a className="hover-target" href="">
                          <i className="fab fa-behance"></i>
                        </a>
                      </li>
                      <li>
                        <a className="hover-target" href="">
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <p>Copyright &copy; 2019 ATLANTA CYCLE CLUB</p>
      </footer>
    </FooterContainer>
  );
}

export default Footer;
