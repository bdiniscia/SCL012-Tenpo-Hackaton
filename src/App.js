import React from 'react';
import './App.css';
import Help from './Components/Help';
import Topbar from './Components/Topbar';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Pending from './Components/Pending';
import Support from './Components/Support'
import Movements from './Components/Movements'
import SupportSimple from './Components/SupportSimple'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App = () => {
  return (
    <div className="App">
      <Router>
        <Topbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Pending">
              <Pending />
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
              <Movements />
            </Route>
          </Switch>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
