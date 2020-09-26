import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <li className="navbar-brand"><Link to="/">Home</Link></li>
            <li className="nav-link"><Link to="/sorting-visualizer">Sorting Visualizer</Link></li>
            <li className="nav-link"><Link to="/Insertion-algo">Insertion</Link></li>
            <li className="nav-link"><Link to="/Bubble-algo">Bubble</Link></li>
            <li className="nav-link"><Link to="/Selection-algo">Selection</Link></li>
            <li className="nav-link"><Link to="/Merge-algo">Merge</Link> </li>
            <li className="nav-link"><Link to="/Heap-algo">Heap</Link> </li>
            <li className="nav-link"><Link to="Quick-algo">Quick</Link></li>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>

    )
}

export default Navbar
