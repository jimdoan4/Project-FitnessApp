import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from './components/Home.jsx'
import Recipes from './components/Recipes.jsx'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/recipes/' component={Recipes} />
          
       
            </Switch>
          </div>
  
      </Router>
    );
  }
}

export default App;