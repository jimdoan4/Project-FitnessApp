import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Home extends Component {

    render() {
        return (
            <div>
           
                <div className="home-img-wrapper">
                <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/featured-13.jpg"/>
                    <div className="overlay-desc brio-headline">
                  
                        <h1 className="brio-text centered">Power Gym</h1>
                    </div>
                </div>
                {/* <div className="home-margin">
                    <Link to={`/workouts`} className="btn btn-primary btn-xl rounded-pill mt-5 home-margin animated fadeInDown delay-2s">Change Your Life</Link>
                </div> */}
            </div >
        )
    }
}

export default Home
