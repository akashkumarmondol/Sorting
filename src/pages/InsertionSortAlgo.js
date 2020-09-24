import React, { Component } from 'react';
import './PageStyle.css';

class InsertionSortAlgo extends Component {
    render() {
        return (
            <div>
                <h1>Insertion Sort Algorithm</h1>
                <div className="SetParagraph">
                    <p align="left">Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands
                    . The array is virtually split into a sorted and an unsorted part.
                     Values from the unsorted part are picked and placed at the correct position in the sorted part.
                     </p>
                     <p className="boldclass">
                     Algorithm
                     </p>
                     <p align="left">

                     To sort an array of size n in ascending order:<br/><br/>
1. Iterate from arr[1] to arr[n] over the array.<br/><br/>
2. Compare the current element (key) to its predecessor.<br/><br/>
3. If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.<br/><br/>
Example: <br/>
                    </p>
                    <img src='../images/insertionsort.png' height="400px" width="400px"></img>
                    <p>Ref: https://en.wikipedia.org/wiki/Bubble_sort</p>
                    
                </div>
                <div className="SourceCode">
                    <p className="boldclass">
                        C++ Source Code for Selection Sort:
                    </p>
                    <div className="designCode">

                    </div>


                </div>
            </div>
        );
    }
}

export default InsertionSortAlgo;