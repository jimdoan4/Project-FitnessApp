import React, { Component } from "react";
import { HomeContainer } from "./styled-components/HomeStyle";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="bg-dark text-white workout-margin workout-jumbo">
          <img
            className="card-img"
            src="https://www.hellomagazine.com/imagenes/healthandbeauty/health-and-fitness/2019040971870/sweat-trainer-kelsey-wells-fitness-tips-new-mums/0-350-475/Kelsey-Wells-t.jpg"
            alt="Home"
            style={{ opacity: "75%" }}
          />
          <div className="card-img-overlay text-center">
            <h2 className="display-5 centered main-header workout-all-margin">
              ATLANTA CYCLE CLUB
            </h2>
          </div>
        </div>

        <div
          className="jumbotron jumbotron-fluid"
          style={{ backgroundColor: "white", color: "black" }}
        >
          <div className="container text-center">
            <h2 className="display-4 sub-header">
              PERSONAL TRAINING AT ATLANTA CYCLE CLUB
            </h2>
            <p className="lead">
              You can, and you will. With the right personal trainer, you’re
              partners in the impossible.
            </p>
            <button className="start-button">GET STARTED TODAY</button>
          </div>
        </div>
        <div className="flex-container">
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
          <div className="column-imgss flex-col">
            <img
              className="member-img card-img"
              src="https://media1.popsugar-assets.com/files/thumbor/gNPMqznk7wYWIs_g8w9QWDeIg-c/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/01/18/748/n/1922729/tmp_g13kI4_210fdc7e610ec25d_GettyImages-891326080.jpg"
            />
          </div>
        </div>
        <br />
        <br />
        <br />

        <HomeContainer>
          <div>
            <h2 className="sub-header">TRAINING ROOM</h2>
            <section className="customer-logos slider text-center">
              <div className="slide">
                <img src="https://cdn-ami-drupal.heartyhosting.com/sites/muscleandfitness.com/files/styles/full_node_image_1090x614/public/media/1109-feet-elevated-pushup.jpg?itok=urXPS8Lq" />
                <button className="button-centered fitness-button">
                  CHEST
                </button>
              </div>

              <div className="slide">
                <img src="http://c2h4.net/wp-content/uploads/2019/06/onlyfitness_cardio_1706x1280Px_43.jpg" />
                <button className="button-centered fitness-button">BACK</button>
              </div>

              <div className="slide">
                <img src="https://www.onlyfitness.ch/-/media/OnlyFitness/Images/Home/1706x1280-4_3/onlyfitness_functional_1706x1280Px_43.jpg?mw=1280&crop=1&la=de-CH&hash=49ADFA9F291604CBB62315EDFEC0A74A" />
                <button className="button-centered fitness-button">
                  SHOULDER
                </button>
              </div>
              <div className="slide">
                <img src="https://cdn.newsapi.com.au/image/v1/29b133ac13b2dcd80f31916d1ec13837?width=1024" />
                <button className="button-centered fitness-button">LEGS</button>
              </div>
              <div className="slide">
                <img src="https://www.shape.com/sites/shape.com/files/styles/facebook_og_image/public/story/pushup-girl.jpg" />
                <button className="button-centered fitness-button">ARMS</button>
              </div>
            </section>
          </div>
        </HomeContainer>

        <h2 className="text-center sub-header">DELICIOUS RECIPES</h2>
        <div className="flex-container recipe-containers">
          <div className="flex-cols">
            <img src="https://cdn.apartmenttherapy.info/image/upload/v1564775676/k/Photo/Recipes/2019-08-how-to-juiciest-turkey-meatballs/How-to-Make-the-Best-Juiciest-Turkey-Meatballs_055.jpg" />
            <br />
            <br />
            <h3>Smooth and Sweet Tomato Meatballs</h3>
          </div>
          <div className="flex-cols">
            <img src="https://ob8qxdtnu3-flywheel.netdna-ssl.com/wp-content/uploads/2019/01/Crispy-Cauliflower-Tacos-036.jpg" />
            <br />
            <br />
            <h3>Savory Chicken Tacos with Glazed Honey</h3>
          </div>
          <div className="flex-cols">
            <img src="https://purewows3.imgix.net/images/articles/2018_01/balsamic-cranberry-roast-chicken.jpg?auto=format,compress&cs=strip" />
            <br />
            <br />
            <h3>Baked Organic Chicken with Vegetables</h3>
          </div>
          <div className="flex-cols">
            <img src="https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/epic-summer-salad.jpg" />
            <br />
            <br />
            <h3>Fresh Organic Mixed Greens with Savory Sweet dressing</h3>
          </div>
        </div>
      </div>
    );
  }
}
