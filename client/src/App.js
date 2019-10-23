import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from './components/Home.jsx'
import Recipes from './components/Recipes.jsx'
import Exercises from './components/Exercises.jsx'
import Shop from './components/Shop.jsx'
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
              <Route exact path='/exercises/' component={Exercises} />
              <Route exact path='/shop/' component={Shop} />
              <Route exact path='/members/' component={Benefits} />
       
            </Switch>
          </div>
  
      </Router>
    );
  }
}

export default App;