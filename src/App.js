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
import InsertionSortAlgo from './pages/InsertionSortAlgo';
import BubbleSortAlgo from './pages/BubbleSortAlgo';
import SelectionSortAlgo from './pages/SelectionSortAlgo';
import MergeSortAlgo from './pages/MergeSortAlgo';
import HeapSortAlgo from './pages/HeapSortAlgo';
import QuickSortAlgo from './pages/QuickSortAlgo';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/shorting-algo">
            <SortingVisualizer></SortingVisualizer>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Insertion-algo">
            <InsertionSortAlgo></InsertionSortAlgo>
          </Route>
          <Route path="/Bubble-algo">
            <BubbleSortAlgo></BubbleSortAlgo>
          </Route>
          <Route path="/Selection-algo">
            <SelectionSortAlgo></SelectionSortAlgo>
          </Route>
          <Route path="/Merge-algo">
            <MergeSortAlgo></MergeSortAlgo>
          </Route>
          <Route path="/Heap-algo">
            <HeapSortAlgo></HeapSortAlgo>
          </Route>
          <Route path="/Quick-algo">
            <QuickSortAlgo></QuickSortAlgo>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
