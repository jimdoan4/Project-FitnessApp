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

        <div className="shop-container">
          <div className="row">
            <div className="column-shop">
              <img
                className="member-img card-img"
                src="https://d50b62f6164e0c4a0279-11570554cb5edae3285603e6ab25c978.ssl.cf5.rackcdn.com/html_body_blocks/images/000/011/928/original/PWR_at_Home_en472abbcd7c16f793585b09ed83341e54.jpg?1554679751"
              />
                <h1 className="mt-5 display-4 sub-header text-center">
                ATLANTA CYCLE PERFORMANCE WEAR
              </h1>
              <h2 className="member-text text-center">
                Introducing the first Performance Wear line. Get it at
                The Shop now. We’ve taken our obsession for fitness and
                channeled it into creating the perfect collection of activewear.
              </h2>
            </div>           
            </div>
          </div>
        </div>
    );
  }
}
