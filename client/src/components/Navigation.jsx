import React, { Component } from "react";
import { NavContainer } from "./styled-components/NavStyle";

function Navigation () {
    return (
      <NavContainer>
           <nav className="navbar navbar-expand-md fixed-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarResponsive">
                <span className="fa fa-bars text-light lead"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav m-auto text-light">
                    <li className="nav-item">
                        <a className="nav-link active" href="/">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/exercises/">TRAINING</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/recipes/">RECIPES</a>
                    </li> 
                    <li className="nav-item">
                            <a className="nav-link" href="/shop/">SHOP</a>
                        </li>
                </ul>
            </div>
        </nav>
      </NavContainer>
    );
  }


export default Navigation;


