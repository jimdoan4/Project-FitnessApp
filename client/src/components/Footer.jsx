import React from "react";
import { FooterContainer } from "./styled-components/FooterStyle";

function Footer() {
  return (
    <FooterContainer>
      <footer class="footer">
        <div class="legal">
          <p>&copy; 2019 Atlanta Cycle Club.  All rights reserved.</p>
          <div class="legal__links">
            <span>
              Designed by Jim Doan
            </span>
          </div>
        </div>
      </footer>
    </FooterContainer>
  );
}

export default Footer;
