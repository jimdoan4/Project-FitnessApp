import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Home extends Component {

    render() {
        return (
            <div>
           
                <div className="home-img-wrapper">
                <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/featured-13.jpg"/>
                    <div className="overlay-desc brio-headline">
                  
                        <h1 className="display-3 brio-text centered" style={{fontWeight:"bold", backgroundColor: "white", fontSize: "8vw"}}>SOUL CYCLE GYM</h1>
                    </div>  
                </div>
           
            </div >
        )
    }
}

export default Home
