import React, { Component } from 'react';
import './PageStyle.css';

class BubbleSortAlgo extends Component {
    render() {
        return (
            <div>
                <h1>Bubble Sort Algorithm</h1>
                <div className="SetParagraph">
                    <p align="left">Bubble sort, sometimes referred to as sinking sort, 
                        is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements
                         and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.
                          The algorithm, which is a comparison sort, is named for the way 
                        smaller or larger elements "bubble" to the top of the list.
                     </p>
                     <p className="boldclass">
                     Step-by-step example
                     </p>
                     <p align="left">

Given an array Data: 7 1 5 3 10<br/>
Find the Data in ascending order using Bubble Sort. In each step, the compared element will be Bold. Three passes will be required:<br/>
First Pass<br/>
( <b>7 1</b> 5 3 10) → ( <b>1 7</b> 5 3 10 ), Here, the bubble sort algorithm compares the first two elements, and swaps them since 7 &lt; 1.<br/>
( 1 <b>7 5</b> 3 10) → ( 1 <b>5 7</b> 3 10 ), Swap since 7 &lt; 5<br/>
( 1 5 <b>7 3</b> 10) → ( 1 5 <b>3 7 </b>10), Swap since 7 &lt; 3<br/>
( 1 5 3 <b>7 10</b>) → ( 1 5 3 <b>7 10</b> ), Now, since these elements are already in order (10 &lt; 7), algorithm does not swap them.<br/>
Second Pass<br/>
( <b>1 5</b>  3 7 10) → ( <b>1 5</b> 3 7 10)<br/>
( 1 <b>5 3</b> 7 10) → ( 1 <b>3 5</b> 7 10), Swap since 5 &lt; 3<br/>
( 1 3 <b>5 7</b> 10) → ( 1 3 <b>5 7 </b>10)<br/>
( 1 3 5 <b>7 10</b>) → ( 1 3 5 <b>7 10</b>)<br/>
Now, the array is already sorted, but the algorithm does not know if it is completed. The algorithm needs one whole pass without any swap to know it is sorted.<br/>
Third Pass<br/>
( <b>1 3</b> 5 7 10) → ( <b>1 3</b> 5 7 10)<br/>
( 1 <b>3 5</b> 7 10) → ( 1 <b>3 5</b> 7 10)<br/>
( 1 3 <b>5 7</b> 10) → ( 1 3 <b>5 7</b> 10)<br/>
( 1 3 5 <b>7 10</b>) → ( 1 3 5 <b>7 10</b>)<br/>
Then Data: 1 3 5 7 10<br/>

                    </p>
                    <p>Ref: https://en.wikipedia.org/wiki/Bubble_sort</p>
                    
                </div>
                <div className="SourceCode">
                    <p className="boldclass">
                        C++ Source Code for Bubble Sort:
                    </p>
                    <div className="designCode">
                        <pre>
                            {`
                            const [animations, array] = getBubbleSortAnimations(this.state.array);
                            const N = animations.length + array.length;
                            for (let i = 0; i < N; i++) {
                                const arrayBars = document.getElementsByClassName('array-bar');
                                const barValue = document.getElementsByClassName('bar-value');
                                if (i >= animations.length) {
                                    const barStyleLast = arrayBars[i - animations.length].style;
                                    setTimeout(() => {
                                        barStyleLast.backgroundColor = PRIMARY_COLOR;
                                    }, i * this.state.speedAuto);
                                    continue;
                                }
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
                                else if (animations[i][0] === "Fixed") {
                                    const [temp, barIndex1, barIndex2] = animations[i];
                                    const barOneStyle = arrayBars[barIndex1].style;
                                    setTimeout(() => {
                                        barOneStyle.backgroundColor = FORTH_COLOR;
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
                            }
                            `}
                        </pre>
                    </div>


                </div>
            </div>
        );
    }
}

export default BubbleSortAlgo;