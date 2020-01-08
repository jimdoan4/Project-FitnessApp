import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavContainer } from "./styled-components/NavStyle";

class Navigation extends Component {
  render() {
    return (
      <NavContainer>
           <nav class="navbar navbar-expand-md fixed-top">
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarResponsive">
                <span class="fa fa-bars text-dark"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav m-auto text-light">
                    <li class="nav-item">
                        <a class="nav-link active" href="/">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/exercises/">TRAINING</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/recipes/">RECIPES</a>
                    </li> 
                    <li class="nav-item">
                            <a class="nav-link" href="/shop/">SHOP</a>
                        </li>
                </ul>
            </div>
        </nav>
      </NavContainer>
    );
  }
}

export default Navigation;

