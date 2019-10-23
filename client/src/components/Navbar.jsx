import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="margin-bottom">
        <ul>
          <li>
          <Link to="/">
                 Home
                </Link>
          </li>
           <li>
           <Link to="/recipes/">
                  Recipes
                </Link>
          </li>
        
        </ul>
      </div>
    );
  }
}

export default Navbar;
