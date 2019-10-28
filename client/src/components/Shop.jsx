import React, { Component } from "react";


export default class Shop extends Component {
  render() {
    return (
      <div>
        <div className="bg-dark text-white workout-margin workout-jumbo">
          <img
            className="card-img main-img"
            src="https://d50b62f6164e0c4a0279-11570554cb5edae3285603e6ab25c978.ssl.cf5.rackcdn.com/html_body_blocks/images/000/011/922/original/PWR_at_Home_Workout_ena86967915ab4c3c11809ad2c17d9bd2c.jpg?1554678228"
            alt="Shop"
          />
          <div className="card-img-overlay text-center">
            <h2
              className="display-5 centered main-header workout-all-margin"
              style={{
               color:"white",
                fontWeight: "bold",
                fontSize: "3.5vw",
                padding: "15px"
              }}
            >
              THE SHOP AT ATLANTA CYCLE GYM
            </h2>
          </div>
        </div>

        <br />

        <div className="member-container">
          <div class="row">
            <div class="column-img">
              <h1 class="mt-5 display-4 sub-header text-center">
              NEW AT THE SHOP
              </h1>
              <h2 className="member-text text-center">
              We’ve taken our obsession for fitness and channeled it into creating the perfect collection of activewear.
              </h2>
            </div>
            <div class="column-img">
              <img
                className="member-img card-img"
                src="https://d1ic4altzx8ueg.cloudfront.net/finder-us/wp-uploads/2018/04/USFSD-TopMensWorkoutClothing-Target.jpg"
              />
              
            </div>
          </div>
        </div>

        <div className="member-container">
          <div class="row">
          <div class="column-img">
              <img
                className="member-img card-img"
                src="https://d50b62f6164e0c4a0279-11570554cb5edae3285603e6ab25c978.ssl.cf5.rackcdn.com/html_body_blocks/images/000/011/928/original/PWR_at_Home_en472abbcd7c16f793585b09ed83341e54.jpg?1554679751"
              />
            
            </div>
            <div class="column-img">
              <h1 class="mt-5 display-4 sub-header text-center">
              ATLANTA CYCLE PERFORMANCE WEAR
              </h1>
              <h2 className="member-text text-center">
              Introducing the first Equinox Performance Wear line. Get it at The
              Shop now.
              </h2>
            </div>
         
          </div>
        </div>
        
      </div>
    );
  }
}
