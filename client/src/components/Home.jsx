import React, { Component } from "react";
import { HomeContainer } from "./styled-components/HomeStyle";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="bg-dark text-light workout-margin workout-jumbo">
          <img
            className="card-img"
            src="https://www.hellomagazine.com/imagenes/healthandbeauty/health-and-fitness/2019040971870/sweat-trainer-kelsey-wells-fitness-tips-new-mums/0-350-475/Kelsey-Wells-t.jpg"
            alt="Home"
            style={{ opacity: "75%" }}
          />
          <div className="card-img-overlay text-center">
            <h3 className="display-5 centered main-header workout-all-margin">
              ATLANTA CYCLE CLUB
            </h3>
          </div>
        </div>

        <div className="jumbotron jumbotron-fluid bg-light text-dark">
          <div className="container text-center">
            <h3 className="display-4 sub-header">
              PERSONAL TRAINING AT ATLANTA CYCLE CLUB
            </h3>
            <p className="lead">
              You can, and you will. With the right personal trainer, you’re
              partners in the impossible.
            </p>
            <button className="start-button bg-dark text-light">GET STARTED TODAY</button>
          </div>
        </div>

        <div className="container-fluid mb-5 benefit-container">
          <div className="row ml-5 mr-5">
            <div className="col-md-6">
              <h3 className="mt-5 display-4 sub-header text-center">
                MEMBERSHIP WITH BENEFITS
              </h3>
              <h5 className="text-center">
                Unlimited Group Fitness is just the beginning. Discover all the
                ways you could unlock your potential with a membership—including
                luxe amenities and exceptional services.
              </h5>
            </div>
            <div className="col-md-6">
              <img
                className="member-img img-fluid"
                src="https://media1.popsugar-assets.com/files/thumbor/gNPMqznk7wYWIs_g8w9QWDeIg-c/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/01/18/748/n/1922729/tmp_g13kI4_210fdc7e610ec25d_GettyImages-891326080.jpg"
              />
            </div>
          </div>
        </div>
   
        <HomeContainer className="container-fluid mb-5 slider-container">
          <h2 className="sub-header">TRAINING ROOM</h2>
          <section className="customer-logos pl-5 pr-5 row text-center">
            <div className="slide col-md-3">
              <img src="https://cdn-ami-drupal.heartyhosting.com/sites/muscleandfitness.com/files/styles/full_node_image_1090x614/public/media/1109-feet-elevated-pushup.jpg?itok=urXPS8Lq" />
              <button className="button-centered fitness-button">CHEST</button>
            </div>

            <div className="slide col-md-3">
              <img src="http://c2h4.net/wp-content/uploads/2019/06/onlyfitness_cardio_1706x1280Px_43.jpg" />
              <button className="button-centered fitness-button">BACK</button>
            </div>

            <div className="slide col-md-3">
              <img src="https://www.onlyfitness.ch/-/media/OnlyFitness/Images/Home/1706x1280-4_3/onlyfitness_functional_1706x1280Px_43.jpg?mw=1280&crop=1&la=de-CH&hash=49ADFA9F291604CBB62315EDFEC0A74A" />
              <button className="button-centered fitness-button">
                SHOULDER
              </button>
            </div>
            <div className="slide col-md-3">
              <img src="https://cdn.newsapi.com.au/image/v1/29b133ac13b2dcd80f31916d1ec13837?width=1024" />
              <button className="button-centered fitness-button">LEGS</button>
            </div>
            {/* <div className="slide col-md-3">
              <img src="https://www.shape.com/sites/shape.com/files/styles/facebook_og_image/public/story/pushup-girl.jpg" />
              <button className="button-centered fitness-button">ARMS</button>
            </div> */}
          </section>
        </HomeContainer>

        <div className="container-fluid mb-4">
          <h2 className="text-center sub-header mb-5">DELICIOUS RECIPES</h2>
          <div className="row pl-5 pr-5 text-center recipe-section">
            <div className="col-md-3">
              <img src="https://cdn.apartmenttherapy.info/image/upload/v1564775676/k/Photo/Recipes/2019-08-how-to-juiciest-turkey-meatballs/How-to-Make-the-Best-Juiciest-Turkey-Meatballs_055.jpg" />

              <h5 className="mt-4">Smooth and Sweet Tomato Meatballs</h5>
            </div>
            <div className="col-md-3">
              <img src="https://ob8qxdtnu3-flywheel.netdna-ssl.com/wp-content/uploads/2019/01/Crispy-Cauliflower-Tacos-036.jpg" />

              <h5 className="mt-4">Savory Chicken Tacos with Glazed Honey</h5>
            </div>
            <div className="col-md-3">
              <img src="https://purewows3.imgix.net/images/articles/2018_01/balsamic-cranberry-roast-chicken.jpg?auto=format,compress&cs=strip" />

              <h5 className="mt-4">Baked Organic Chicken with Vegetables</h5>
            </div>
            <div className="col-md-3">
              <img className="img-fluid" src="https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/epic-summer-salad.jpg" />

              <h5 className="mt-4">
                Fresh Organic Mixed Greens with Savory Sweet dressing
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
