import React from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from "react-player";
import './HomeDesign.css';
import './BodyDesign.css';

function Home() {
    return (
        <div>
            <ul className="HomeClass">
    
            </ul>
            <div className="BodyContainer">
                <h2>Welcome</h2>
                <hr/>
                <h1>Sorting Algorithm Visualizer</h1>
                <p>Making a video of my Sorting Algorithm Visualizer</p>
                <div align="center" className="video">
                    <ReactPlayer url="https://www.youtube.com/watch?v=waUe0ZS3OnI&ab_channel=AkashKumar" controls={true}></ReactPlayer>
                </div>

            </div>

        </div>
    )
}

export default Home
