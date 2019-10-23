import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar.jsx";
import Home from './components/Home.jsx'
// import Workout from './components/Workout';
// import IndividualWorkout from './components/IndividualWorkout';
 import Recipes from './components/Recipes.jsx'
// import IndividualExercise from './components/IndividualExercise.jsx'
// import IndividualRecipe from './components/IndividualRecipe';
// import Gyms from './components/Gyms';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
          <Navbar/>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/recipes/' component={Recipes} />
              {/* <Route path='/recipes/:id' component={IndividualRecipe} /> */}
       
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;