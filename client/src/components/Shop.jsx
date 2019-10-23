import React, { Component } from "react";

import { Link } from "react-router-dom";


export default class Shop extends Component {
  render() {
    return (
      <div>
        <div className="bg-dark text-white workout-margin workout-jumbo">
          <img
            className="card-img"
            src="https://s1.1zoom.me/b5050/53/Fitness_Dumbbells_Hands_White_background_Beautiful_562300_3840x2400.jpg"
            alt="Workout"
          />
          <div className="card-img-overlay text-center">
            <h1 className="display-4 centered workout-all-margin" style={{backgroundColor: "black", fontWeight:"bold", fontSize: "5.5vw"}}>
              THE SHOP AT SOUL CYCLE FITNESS
            </h1>
          </div>
        </div>
        <div class="jumbotron jumbotron-fluid" style={{backgroundColor: "white"}}>
          <div class="container text-center">
            <h1 class="display-5">PERSONAL TRAINING AT EQUINOX</h1>
            <p class="lead">
              You can, and you will. With the right personal trainer, you’re
              partners in the impossible.
            </p>
            <button className="start-button">GET STARTED TODAY</button>
          </div>
        </div>
        <div class="jumbotron jumbotron-fluid" style={{backgroundColor: "black", color: "white", marginTop:"-30px"}}>
          <div class="container text-center">
            <h1 class="display-5">MAKE THE IMPOSSIBLE HAPPEN</h1>
            <p class="lead">
            Together, you and your dedicated personal trainer break records, tear down walls, and unlock the extraordinary. At every step, you’re driven by passionate trainers backed by the latest science and our industry-leading institute. Our program. Your results.
            </p>
          </div>
        </div>
        <br />

       
     
        </div>
   
    );
  }
}
