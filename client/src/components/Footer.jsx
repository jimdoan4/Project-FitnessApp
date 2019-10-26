import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FooterContainer } from "./styled-components/FooterStyle";

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
      <div className="text-center footer">
       <Link to="/">HOME</Link>
       <Link to="/exercises/">TRAINING</Link>
       <Link to="/recipes/">RECIPES</Link>
       <Link to="/members/">MEMBER BENEFITS</Link>
       <Link to="/">HOME</Link>
       <Link to="/exercises/">TRAINING</Link>
       <Link to="/recipes/">RECIPES</Link>
       <Link to="/members/">MEMBER BENEFITS</Link>
       
       </div>
</FooterContainer>
    );
  }
}

export default Footer;