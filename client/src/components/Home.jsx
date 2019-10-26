import React, { Component } from "react";
import { HomeContainer } from "./styled-components/HomeStyle";

export default class Home extends Component {
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
              className="display-5 centered main-header workout-all-margin"
            >
              ATLANTA CYCLE GYM
            </h1>
          </div>
        </div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container text-center">
            <h2 class="display-4 sub-header">PERSONAL TRAINING AT ATLANTA CYCLE GYM</h2>
            <p class="lead">
              You can, and you will. With the right personal trainer, you’re
              partners in the impossible.
            </p>
            <button className="start-button">GET STARTED TODAY</button>
          </div>
        </div>

        <HomeContainer>
          <div class="container">
            <h2 className="sub-header">CHECK OUT OUR WORKOUT TECHNIQUES</h2>
            <section class="customer-logos slider">
              <div class="slide">
                <img src="https://cdn-ami-drupal.heartyhosting.com/sites/muscleandfitness.com/files/styles/full_node_image_1090x614/public/media/1109-feet-elevated-pushup.jpg?itok=urXPS8Lq" />
                <button className="button-centered fitness-button">GET STARTED TODAY</button>
              </div>

              <div class="slide">
                <img src="http://c2h4.net/wp-content/uploads/2019/06/onlyfitness_cardio_1706x1280Px_43.jpg" />
                <button className="button-centered fitness-button">GET STARTED TODAY</button>
              </div>

              <div class="slide">
                <img src="https://www.onlyfitness.ch/-/media/OnlyFitness/Images/Home/1706x1280-4_3/onlyfitness_functional_1706x1280Px_43.jpg?mw=1280&crop=1&la=de-CH&hash=49ADFA9F291604CBB62315EDFEC0A74A" />
                <button className="button-centered fitness-button">GET STARTED TODAY</button>
              </div>
              <div class="slide">
                <img src="https://cdn.newsapi.com.au/image/v1/29b133ac13b2dcd80f31916d1ec13837?width=1024" />

              </div>
              <div class="slide">
                <img src="https://www.shape.com/sites/shape.com/files/styles/facebook_og_image/public/story/pushup-girl.jpg" />

              </div>
  
            </section>
          </div>
        </HomeContainer>

        <div class="media container module">
          <img
            src="https://cdn.shopify.com/s/files/1/1894/2897/products/New-Brand-clothing-Gyms-Tight-t-shirt-mens-fitness-t-shirt-homme-Golds-t-shirt-men_d7467637-c250-404e-b550-22f3676f6604_800x.jpg?v=1528953700"
            class="align-self-start mr-3 card-img"
            alt="..."
            style={{
              width: "44rem",
              height: "44rem",
              border: "white 1px solid"
            }}
          />
          <div class="media-body text-center">
            <h2 class="mt-5 display-5 sub-header">CREATE YOUR OWN WORKOUTS AND RECIPES</h2>
            <p class="lead">
              Introducing the first Atlanta Cycle Performance Wear line. Get it
              at The Shop now.
            </p>
            {/* <br />
            <button className="log-in-button">LOG IN TODAY</button> */}
          </div>
        </div>

        <div class="media container module">
          <div class="media-body text-center">
            <h2 class="mt-5 display-5 sub-header">ATLANTA CYCLE PERFORMANCE WEAR</h2>
            <p class="lead">
              We’ve taken our obsession for fitness and channeled it into
              creating the perfect collection of activewear.
            </p>
          </div>
          <img
            src="https://d1ic4altzx8ueg.cloudfront.net/finder-us/wp-uploads/2018/04/USFSD-TopMensWorkoutClothing-Target.jpg"
            class="ml-3 card-img"
            alt="..."
            style={{
              width: "44rem",
              height: "44rem",
            }}
          />
        </div>

        <div class="media container module">
          <img
            src="http://momsdailybrief.com/wp-content/uploads/2019/05/jen-goal-crushers-challenge-promo-1000-1.jpg"
            class="align-self-start mr-3 card"
            alt="..."
            style={{
              width: "44rem",
              height: "44rem",
              border: "white 1px solid"
            }}
          />
          <div class="media-body text-center">
            <h2 class="mt-5 display-5 sub-header">MEMBERSHIP WITH BENEFITS</h2>
            <p class="lead">
              With every detail from waistbands to hems created for Atlanta
              Cycle Gym high-performers, we dare you not to be obsessed.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
