import React from 'react';
import './SortingVisualizer.css';

const Display = ({color, value,width,height,margin})=>{
    return (
        <div className="display">
            <div
               className="array-bar"
               style={{
                   backgroundColor: color,
                   height: height,
                   width: width,
                   margin: margin 
               }}
            ></div>   
            <br/>   
            <p
                 className="bar-value"
                 style ={{
                     width: width,
                     margin: margin
                 }}
                 
            >{value}</p>     
        </div>
    );
}

export default Display;