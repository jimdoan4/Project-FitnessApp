import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from './components/Home.jsx'
import Recipes from './components/Recipes.jsx'
import RecipePage from './components/RecipePage.jsx'
import Exercises from './components/Exercises.jsx'
import ExercisePage from './components/ExercisePage.jsx'
import Benefits from './components/Benefits.jsx'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/recipes/' component={Recipes} />
              <Route exact path='/recipes/:recipeId/' component={RecipePage} />
              <Route exact path='/exercises/' component={Exercises} />
              <Route exact path='/exercises/:exerciseId/' component={ExercisePage} />
              <Route exact path='/members/' component={Benefits} />
       
            </Switch>
          </div>
  <Footer/>
      </Router>
    );
  }
}

export default App;