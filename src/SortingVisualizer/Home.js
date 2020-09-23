import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>Hi There</h1>
            <Link to="/shorting-algo">Shorting Algorith</Link>
        </div>
    )
}

export default Home
