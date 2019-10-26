import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div class="topnav" id="myTopnav">
      <div className="text-center">
       <Link to="/">HOME</Link>
       <Link to="/exercises/">TRAINING</Link>
       <Link to="/recipes/">RECIPES</Link>
       <Link to="/members/">MEMBER BENEFITS</Link>
       </div>

  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>
    );
  }
}

export default Navbar;
