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

                        To sort an array of size n in ascending order:<br /><br />
1. Iterate from arr[1] to arr[n] over the array.<br /><br />
2. Compare the current element (key) to its predecessor.<br /><br />
3. If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.<br /><br />
Example: <br />
                    </p>
                    <img src={require('../images/insertionsort.png')} height="400px" width="400px"></img>
                    <p>Ref: https://en.wikipedia.org/wiki/Bubble_sort</p>

                </div>
                <div className="SourceCode">
                    <p className="boldclass">
                        C++ Source Code for Insertion Sort:
                    </p>
                    <div className="designCode">
                        <pre>
                            {`
                               const animations = getInsertionSortAnimations(this. state.array);
                                for (let i = 0; i < animations.length; i++) {
                                    const arrayBars = document.getElementsByClassName('array-bar');
                                    const barValue = document.getElementsByClassName('bar-value');
                                    if (animations[i][0] == "comp1" || animations[i][0] == "comp2") {
                                        let color = (animations[i][0] == "comp1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                                        let [temp, barOneIndex, barTwoIndex] = animations[i];
                                        let barOneStyle = arrayBars[barOneIndex].style;
                                        let barTwoStyle = arrayBars[barTwoIndex].style;
                                        setTimeout(() => {
                                            barOneStyle.backgroundColor = color;
                                            barTwoStyle.backgroundColor = color;
                                        }, i * this.state.speedAuto);
                                    }
                                    else if (animations[i][0] === "colorChangedOne" || animations[i][0] === "colorChangedTwo") {
                                        let [temp, barIndex1, barIndex2] = animations[i];
                                        let colorbar = (animations[i][0] === "colorChangedOne") ? THIRD_COLOR : PRIMARY_COLOR;
                                        let barStyle1 = arrayBars[barIndex1].style;
                                        let barStyle2 = arrayBars[barIndex2].style;
                                        setTimeout(() => {
                                            barStyle1.backgroundColor = colorbar;
                                            barStyle2.backgroundColor = colorbar;
                                        }, i * this.state.speedAuto);
                                    }
                                    else {
                                        let [temp, barIndex, newHeight] = animations[i];
                                        let barStyle = arrayBars[barIndex].style;
                                        let bar = barValue[barIndex];
                                        setTimeout(() => {
                                            barStyle.height = newHeight*multiply px;
                                            bar.innerHTML = newHeight;
                                        }, i * this.state.speedAuto);
                                    }
                                }`
                            }</pre>
                    </div>


                </div>
            </div>
        );
    }
}

export default InsertionSortAlgo;