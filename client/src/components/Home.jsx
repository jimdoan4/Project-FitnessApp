import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Home extends Component {

    render() {
        return (
            <div>
            <div className="bg-dark text-white workout-margin workout-jumbo">
              <img
                className="card-img"
                src="https://www.vahvafitness.com/wp-content/uploads/2018/09/header-3.jpg"
                alt="Shop"
                style={{height:"30rem"}}
              />
              <div className="card-img-overlay text-center" >
                <h1
                  className="display-5 centered workout-all-margin"
                  style={{
                   color:"orange",
                    fontWeight: "bold",
                    fontSize: "4vw",
                    padding: "10px",
                    left: "30%",
                    top: "40%"

                  }}
                >
                 ATLANTA CYCLE GYM
               
                </h1>
             
              </div>
            </div>
    
            <br />
            <br />
            <div class="media container">
              <img
                src="https://rachelneville.com/wp-content/uploads/2013/12/blue-yoga-mat.jpg"
                class="align-self-start mr-3 card"
                alt="..."
                style={{
                  width: "34rem",
                  height: "32rem",
                  border: "white 1px solid"
                }}
              />
              <div class="media-body text-center">
                <h2 class="mt-5 display-5">LOG IN YOUR OWN WORKOUT AND RECIPES</h2>
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
                src="https://media.roxyaustralia.com.au/media/rx/tiles/2019/S3/RX-2019-S3-TILE-FITNESS_05.jpg"
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
                src="https://www.socialmediamarketingwi.com/wp-content/uploads/2019/08/57.jpg"
                class="align-self-start mr-3 card"
                alt="..."
                style={{
                  width: "34rem",
                  height: "32rem",
                  border: "white 1px solid"
                }}
              />
              <div class="media-body text-center">
                <h2 class="mt-5 display-5">MEMBERSHIP WITH BENEFITS</h2>
                <p class="lead">
                  Introducing the first Equinox Performance Wear line. With every
                  detail from waistbands to hems created for Atlanta Cycle Gym
                  high-performers, we dare you not to be obsessed.
                </p>
              </div>
            </div>
          </div>
        )
    }
}

export default Home
