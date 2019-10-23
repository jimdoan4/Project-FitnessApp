import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/exercises/">TRAINING</Link>
          </li>
          <li>
            <Link to="/recipes/">RECIPES</Link>
          </li>
          <li>
            <Link to="/shop/">SHOP</Link>
          </li>

          <li>
            <Link to="/members/">MEMBER BENEFITS</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
