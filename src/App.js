import React, {Fragment} from 'react';
import './App.css';
import Help from './Components/Help';
import TopbarMovements from './Components/TopbarMovements'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Support from './Components/Support'
import SupportSimple from './Components/SupportSimple'
import Movements from './Components/Movements'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



const App = () => {
  return (
    <Fragment>
     
      <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Help">
              <Help />
            </Route>
            <Route path="/Support">
              <Support />
            </Route>
            <Route path="/SupportSimple">
              <SupportSimple />
            </Route>
            <Route path="/Movements">
            <TopbarMovements />
              <Movements />
            </Route>
          </Switch>
        <Navbar />
      </Router>
    </Fragment>
  );
}

export default App;
