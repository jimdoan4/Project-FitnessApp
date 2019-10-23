import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="margin-bottom">
        <ul>
          <li>
            <a class="active" href="#home">
              Home
            </a>
          </li>
           <li>
            <a href="/recipes">Recipe</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li> 
        </ul>
      </div>
    );
  }
}

export default Navbar;
