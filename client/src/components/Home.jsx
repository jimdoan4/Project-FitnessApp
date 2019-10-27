import React, { Component } from "react";
import { HomeContainer } from "./styled-components/HomeStyle";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="bg-dark text-white workout-margin workout-jumbo">
          <img
            className="card-img main-img"
            src="https://www.hellomagazine.com/imagenes/healthandbeauty/health-and-fitness/2019040971870/sweat-trainer-kelsey-wells-fitness-tips-new-mums/0-350-475/Kelsey-Wells-t.jpg"
            alt="Shop"
          />
          <div className="card-img-overlay text-center">
            <h2 className="display-5 centered main-header workout-all-margin">
              ATL CYCLE GYM
            </h2>
          </div>
        </div>

        <div
          class="jumbotron jumbotron-fluid"
          style={{ backgroundColor: "white", color: "black" }}
        >
          <div class="container text-center">
            <h2 class="display-4 sub-header">
              PERSONAL TRAINING AT ATLANTA CYCLE GYM
            </h2>
            <p class="lead">
              You can, and you will. With the right personal trainer, you’re
              partners in the impossible.
            </p>
            <button className="start-button">GET STARTED TODAY</button>
          </div>
        </div>

        <HomeContainer>
          <div class="container-fluid">
            <h2 className="sub-header">FITNESS</h2>
            <section class="customer-logos slider">
              <div class="slide">
                <img src="https://cdn-ami-drupal.heartyhosting.com/sites/muscleandfitness.com/files/styles/full_node_image_1090x614/public/media/1109-feet-elevated-pushup.jpg?itok=urXPS8Lq" />
                <button className="button-centered fitness-button">
                  GET STARTED TODAY
                </button>
              </div>

              <div class="slide">
                <img src="http://c2h4.net/wp-content/uploads/2019/06/onlyfitness_cardio_1706x1280Px_43.jpg" />
                <button className="button-centered fitness-button">
                  GET STARTED TODAY
                </button>
              </div>

              <div class="slide">
                <img src="https://www.onlyfitness.ch/-/media/OnlyFitness/Images/Home/1706x1280-4_3/onlyfitness_functional_1706x1280Px_43.jpg?mw=1280&crop=1&la=de-CH&hash=49ADFA9F291604CBB62315EDFEC0A74A" />
                <button className="button-centered fitness-button">
                  GET STARTED TODAY
                </button>
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

        <div className="recipe-container">
          <h2 className="text-center sub-header">RECIPES</h2>
          <div class="row">
            <div class="column">
              <img src="https://cdn.apartmenttherapy.info/image/upload/v1564775676/k/Photo/Recipes/2019-08-how-to-juiciest-turkey-meatballs/How-to-Make-the-Best-Juiciest-Turkey-Meatballs_055.jpg" />
              <div class="middle">
                <div class="text">John Doe</div>
              </div>
              <h1>TEXT TEXT</h1>
            </div>
            <div class="column">
              <img src="https://ob8qxdtnu3-flywheel.netdna-ssl.com/wp-content/uploads/2019/01/Crispy-Cauliflower-Tacos-036.jpg" />
              <h1>TEXT TEXT</h1>
            </div>
            <div class="column">
              <img src="https://purewows3.imgix.net/images/articles/2018_01/balsamic-cranberry-roast-chicken.jpg?auto=format,compress&cs=strip" />
              <h1>TEXT TEXT</h1>
            </div>
            <div class="column">
              <img src="https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/epic-summer-salad.jpg" />
              <h1>TEXT TEXT</h1>
            </div>
          </div>
        </div>

        <div className="member-container">
          <h2 className="text-center sub-header">MEMBERSHIP</h2>
          <div class="row module">
            <div class="column-img">
              <h2 class="mt-5 display-5 sub-header">
                ATLANTA CYCLE PERFORMANCE WEAR
              </h2>
              <h2 className="member-text">
                We’ve taken our obsession for fitness and channeled it into
                creating the perfect collection of activewear.
              </h2>
            </div>
            <div class="column-img">
              <img
                className="member-img card-img"
                src="https://d1ic4altzx8ueg.cloudfront.net/finder-us/wp-uploads/2018/04/USFSD-TopMensWorkoutClothing-Target.jpg"
              />
              <div class="middle">
                <div class="text">John Doe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
