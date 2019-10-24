import React, { Component } from "react";


export default class Shop extends Component {
  render() {
    return (
      <div>
        <div className="bg-dark text-white workout-margin workout-jumbo">
          <img
            className="card-img"
            src="https://media.gq.com/photos/5a011017196d3f6684ae0747/master/pass/collections-fitness.png"
            alt="Shop"
          />
          <div className="card-img-overlay text-center">
            <h1
              className="display-5 centered workout-all-margin"
              style={{
               color:"white",
                fontWeight: "bold",
                fontSize: "3.5vw",
                padding: "15px"
              }}
            >
              THE SHOP AT ATLANTA CYCLE GYM
            </h1>
          </div>
        </div>

        <br />
        <br />
        <div class="media container">
          <img
            src="https://cdn.shopify.com/s/files/1/1894/2897/products/New-Brand-clothing-Gyms-Tight-t-shirt-mens-fitness-t-shirt-homme-Golds-t-shirt-men_d7467637-c250-404e-b550-22f3676f6604_800x.jpg?v=1528953700"
            class="align-self-start mr-3 card"
            alt="..."
            style={{
              width: "34rem",
              height: "32rem",
              border: "white 1px solid"
            }}
          />
          <div class="media-body text-center">
            <h2 class="mt-5 display-5">NEW AT THE SHOP</h2>
            <p class="lead">
              Introducing the first Equinox Performance Wear line. Get it at The
              Shop now.
            </p>
            <br />
            <button className="start-button">
              CHECK OUT OUR NEWEST FASHION TODAY
            </button>
          </div>
        </div>

        <div class="media container" style={{ marginTop: "50px" }}>
          <div class="media-body text-center">
            <h2 class="mt-5 display-5">ATLANTA CYCLE PERFORMANCE WEAR</h2>
            <p class="lead">
              We’ve taken our obsession for fitness and channeled it into
              creating the perfect collection of activewear.
            </p>
          </div>
          <img
            src="https://d1ic4altzx8ueg.cloudfront.net/finder-us/wp-uploads/2018/04/USFSD-TopMensWorkoutClothing-Target.jpg"
            class="ml-3 card"
            alt="..."
            style={{
              width: "34rem",
              height: "32rem",
              border: "white 1px solid"
            }}
          />
        </div>

        <div class="media container" style={{ marginTop: "50px" }}>
          <img
            src="http://momsdailybrief.com/wp-content/uploads/2019/05/jen-goal-crushers-challenge-promo-1000-1.jpg"
            class="align-self-start mr-3 card"
            alt="..."
            style={{
              width: "34rem",
              height: "32rem",
              border: "white 1px solid"
            }}
          />
          <div class="media-body text-center">
            <h2 class="mt-5 display-5">PERFORMANCE WEAR NO ONE CAN MATCH</h2>
            <p class="lead">
              Introducing the first Equinox Performance Wear line. With every
              detail from waistbands to hems created for Atlanta Cycle Gym
              high-performers, we dare you not to be obsessed.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
