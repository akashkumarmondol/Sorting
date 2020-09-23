import React from 'react';
import logo from './logo.svg';
import './App.css';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './SortingVisualizer/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/shorting-algo">
            <SortingVisualizer></SortingVisualizer>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
