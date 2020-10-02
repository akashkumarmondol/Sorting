import React from 'react';
import './SortingVisualizer.css';

const Display2 = ({color, value,width,height,margin})=>{
    return (
        <div className="display2">
            <div
               className="array-bar2"
               style={{
                   backgroundColor: color,
                   height: height,
                   width: width,
                   margin: margin 
               }}
            ></div>   
            <br/>   
            <p
                 className="bar-value2"
                 style ={{
                     width: width,
                     margin: margin
                 }}
                 
            >{value}</p>     
        </div>
    );
}

export default Display2;