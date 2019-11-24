import React, { Component } from "react";

export default class Shop extends Component {
  render() {
    return (
      <div>
        <div className="bg-dark text-white shop-img-container workout-margin workout-jumbo">
          <img
            className="card-img"
            src="https://www.washingtonian.com/wp-content/uploads/2019/05/iStock-1007730100-1500x1000.jpg"
            alt="Shop"
            style={{ opacity: "75%" }}
          />
          <div className="card-img-overlay text-center">
            <h2
              className="display-5 centered workout-all-margin p-2 text-light"
              style={{
                fontWeight: "bold",
                fontSize: "3.5vw"
              }}
            >
              THE SHOP AT ATLANTA CYCLE CLUB
            </h2>
          </div>
        </div>
        <div className="container-fluid mt-5 shop-container">
          <div className="row ml-5 mr-5">
            <div className="col-md-6">
            <h1 className="display-4 text-center">
              ATLANTA CYCLE PERFORMANCE WEAR
            </h1>
            <h2 className="text-center">
              Introducing the first Performance Wear line. Get it at The Shop
              now. We’ve taken our obsession for fitness and channeled it into
              creating the perfect collection of activewear.
            </h2>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid"
              src="http://fitblog.com.tr/wp-content/uploads/2019/10/shutterstock_1185036736-1024x683.jpg"
            />
          </div>
        </div>
        </div>
       
        <div className="container-fluid mb-5 mt-4 shop-container">
          <div className="row ml-5 mr-5">
            <div className="col-md-6">
            <img
              className="img-fluid"
              src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F35%2F2012%2F05%2F16182731%2Fhiit-workouts-for-women-weight-loss.jpg&q=85"
            />
          </div>
          <div className="col-md-6 mb-3 mt-4">
            <h1 className="display-4 text-center">
              MEMBERSHIP WITH BENEFITS
            </h1>
            <h2 className="text-center">
              Unlimited Group Fitness is just the beginning. Discover all the
              ways you could unlock your potential with a membership—including
              luxe amenities and exceptional services.
            </h2>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
