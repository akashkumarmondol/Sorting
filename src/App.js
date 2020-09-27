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
import Navbar from './SortingVisualizer/Navbar';
import Footer from './SortingVisualizer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/sorting-visualizer">
            <SortingVisualizer></SortingVisualizer>
          </Route>
          <Route exact path="/">
            <Navbar />
            <Home />
            <Footer/>
          </Route>
          <Route path="/Insertion-algo">
            <Navbar />
            <InsertionSortAlgo></InsertionSortAlgo>
          </Route>
          <Route path="/Bubble-algo">
            <Navbar />
            <BubbleSortAlgo></BubbleSortAlgo>
          </Route>
          <Route path="/Selection-algo">
            <Navbar />
            <SelectionSortAlgo></SelectionSortAlgo>
          </Route>
          <Route path="/Merge-algo">
            <Navbar />
            <MergeSortAlgo></MergeSortAlgo>
          </Route>
          <Route path="/Heap-algo">
            <Navbar />
            <HeapSortAlgo></HeapSortAlgo>
          </Route>
          <Route path="/Quick-algo">
            <Navbar />
            <QuickSortAlgo></QuickSortAlgo>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
