import React from 'react';
import './App.css';
import Help from './Components/Help';
import Topbar from './Components/Topbar';
import TopbarMovements from './Components/TopbarMovements'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Pending from './Components/Pending';
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
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/">
              <Topbar />
              <Home />
            </Route>
            <Route path="/Pending">
              <Topbar />
              <Pending />
            </Route>
            <Route path="/Help">
              <Topbar />
              <Help />
            </Route>
            <Route path="/Support">
              <Topbar />
              <Support />
            </Route>
            <Route path="/SupportSimple">
              <Topbar />
              <SupportSimple />
            </Route>
            <Route path="/Movements">
            <TopbarMovements />
              <Movements />
            </Route>
          </Switch>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
