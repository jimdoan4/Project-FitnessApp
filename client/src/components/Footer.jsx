import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { FooterContainer } from "./styled-components/FooterStyle";

class Footer extends Component {
  render() {
    return (

<FooterContainer>
<footer>
<section class="contact-area" id="contact">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 offset-lg-3">
                <div class="contact-content text-center">
                    
                    <h6>Atlanta Cycle Club</h6>
                    <h6>+01 2345 6789 12<span>|</span>+01 2345 6789 12</h6>
                    <div class="contact-social">
                        <ul>
                            <li><a class="hover-target" href=""><i class="fab fa-facebook-f"></i></a></li>
                            <li><a class="hover-target" href=""><i class="fab fa-linkedin-in"></i></a></li>
                            <li><a class="hover-target" href=""><i class="fab fa-github"></i></a></li>
                            <li><a class="hover-target" href=""><i class="fab fa-behance"></i></a></li>
                            <li><a class="hover-target" href=""><i class="fab fa-pinterest-p"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    <p>Copyright &copy; 2019 Atlanta Cycle Club</p>
</footer>

      </FooterContainer>
    );
  }
}

export default Footer;
