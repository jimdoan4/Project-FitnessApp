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
        
        <div className="member-container">
          <div class="row module">
            <div class="column-img">
              <h1 class="mt-5 display-4 sub-header text-center">
              MEMBERSHIP WITH BENEFITS
              </h1>
              <h2 className="member-text text-center">
              Unlimited Group Fitness is just the beginning. Discover all the ways you could unlock your potential with an Equinox membership—including luxe amenities and exceptional services. 
              </h2>
            </div>
            <div class="column-img">
              <img
                className="member-img card-img"
                src="https://media1.popsugar-assets.com/files/thumbor/gNPMqznk7wYWIs_g8w9QWDeIg-c/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/01/18/748/n/1922729/tmp_g13kI4_210fdc7e610ec25d_GettyImages-891326080.jpg"
              />
              <div class="middle">
                <div class="text">John Doe</div>
              </div>
            </div>
          </div>
        </div>
        <HomeContainer>
          <div class="container-fluid">
            <h2 className="sub-header">TRAINING ROOM</h2>
            <section class="customer-logos slider row text-center">
              <div class="slide column">
                <img src="https://cdn-ami-drupal.heartyhosting.com/sites/muscleandfitness.com/files/styles/full_node_image_1090x614/public/media/1109-feet-elevated-pushup.jpg?itok=urXPS8Lq" />
                <button className="button-centered fitness-button">
                  CHEST
                </button>
              </div>

              <div class="slide column">
                <img src="http://c2h4.net/wp-content/uploads/2019/06/onlyfitness_cardio_1706x1280Px_43.jpg" />
                <button className="button-centered fitness-button">BACK</button>
              </div>

              <div class="slide column">
                <img src="https://www.onlyfitness.ch/-/media/OnlyFitness/Images/Home/1706x1280-4_3/onlyfitness_functional_1706x1280Px_43.jpg?mw=1280&crop=1&la=de-CH&hash=49ADFA9F291604CBB62315EDFEC0A74A" />
                <button className="button-centered fitness-button">
                  SHOULDER
                </button>
              </div>
              <div class="slide column">
                <img src="https://cdn.newsapi.com.au/image/v1/29b133ac13b2dcd80f31916d1ec13837?width=1024" />
                <button className="button-centered fitness-button">LEGS</button>
              </div>
              <div class="slide column">
                <img src="https://www.shape.com/sites/shape.com/files/styles/facebook_og_image/public/story/pushup-girl.jpg" />
                <button className="button-centered fitness-button">ARMS</button>
              </div>
            </section>
          </div>
        </HomeContainer>

        <div className="recipe-container">
          <h2 className="text-center sub-header">DELICIOUS RECIPES</h2>
          <div class="row">
            <div class="column">
              <img src="https://cdn.apartmenttherapy.info/image/upload/v1564775676/k/Photo/Recipes/2019-08-how-to-juiciest-turkey-meatballs/How-to-Make-the-Best-Juiciest-Turkey-Meatballs_055.jpg" />
              <div class="middle">
                <div class="text">John Doe</div>
              </div>
              <br />
              <br />
              <h3>
                Member Events erschaffen einen Mix, der dich bewegt und immer
                wieder neu motiviert. JOHN REED ist mehr. Mehr als du erwartest.
              </h3>
            </div>
            <div class="column">
              <img src="https://ob8qxdtnu3-flywheel.netdna-ssl.com/wp-content/uploads/2019/01/Crispy-Cauliflower-Tacos-036.jpg" />
              <br />
              <br />
              <h3>
                Member Events erschaffen einen Mix, der dich bewegt und immer
                wieder neu motiviert. JOHN REED ist mehr. Mehr als du erwartest.
              </h3>
            </div>
            <div class="column">
              <img src="https://purewows3.imgix.net/images/articles/2018_01/balsamic-cranberry-roast-chicken.jpg?auto=format,compress&cs=strip" />
              <br />
              <br />
              <h3>
                Member Events erschaffen einen Mix, der dich bewegt und immer
                wieder neu motiviert. JOHN REED ist mehr. Mehr als du erwartest.
              </h3>
            </div>
            <div class="column">
              <img src="https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/epic-summer-salad.jpg" />
              <br />
              <br />
              <h3>
                Member Events erschaffen einen Mix, der dich bewegt und immer
                wieder neu motiviert. JOHN REED ist mehr. Mehr als du erwartest.
              </h3>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
