import React, { Component } from "react";

export default class Shop extends Component {
  render() {
    return (
      <div>
        <div className="bg-dark text-white workout-margin workout-jumbo">
          <img
            className="card-img"
            src="https://www.washingtonian.com/wp-content/uploads/2019/05/iStock-1007730100-1500x1000.jpg"
            alt="Shop"
            style={{ opacity: "75%" }}
          />
          <div className="card-img-overlay text-center">
            <h2
              className="display-5 centered shop-header workout-all-margin"
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "3.5vw",
                padding: "15px"
              }}
            >
              THE SHOP AT ATLANTA CYCLE CLUB
            </h2>
          </div>
        </div>

        <br />
        <div className="flex-container">
          <div className="flex-col">
            <h1 className="mt-5 display-4 sub-header text-center">
              ATLANTA CYCLE PERFORMANCE WEAR
            </h1>
            <h2 className="member-text text-center">
              Introducing the first Performance Wear line. Get it at The Shop
              now. We’ve taken our obsession for fitness and channeled it into
              creating the perfect collection of activewear.
            </h2>
          </div>
          <div className="column-imgss flex-col">
            <img
              className="member-img card-img"
              src="http://fitblog.com.tr/wp-content/uploads/2019/10/shutterstock_1185036736-1024x683.jpg"
            />
          </div>
        </div>
        <br />
        <br />
        <div className="flex-container">
          <div className="column-imgss flex-col">
            <img
              className="member-img card-img"
              src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F35%2F2012%2F05%2F16182731%2Fhiit-workouts-for-women-weight-loss.jpg&q=85"
            />
          </div>
          <div className="flex-col">
            <h1 className="mt-5 display-4 sub-header text-center">
              MEMBERSHIP WITH BENEFITS
            </h1>
            <h2 className="member-text text-center">
              Unlimited Group Fitness is just the beginning. Discover all the
              ways you could unlock your potential with a membership—including
              luxe amenities and exceptional services.
            </h2>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
