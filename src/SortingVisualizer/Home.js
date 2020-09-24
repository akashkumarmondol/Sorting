import React from 'react'
import { Link } from 'react-router-dom'
import './HomeDesign.css';

function Home() {
    return (
        <div>
            <ul className="HomeClass">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shorting-algo">Sorting Visualizer</Link></li>
                <li><Link to="/Insertion-algo">Insertion</Link></li>
                <li><Link to="/Bubble-algo">Bubble</Link></li>
                <li><Link to="/Selection-algo">Selection</Link></li>
                <li><Link to="/Merge-algo">Merge</Link> </li>
                <li><Link to="/Heap-algo">Heap</Link> </li>
                <li><Link to="Quick-algo">Quick</Link></li>
            </ul>
        </div>
    )
}

export default Home
