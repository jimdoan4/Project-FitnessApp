import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="">TRAINING</Link>
          </li>
          <li>
            <Link to="/recipes/">RECIPES</Link>
          </li>
          <li>
            <Link to="">SHOP</Link>
          </li>

          <li>
            <Link to="">MEMBER BENEFITS</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
