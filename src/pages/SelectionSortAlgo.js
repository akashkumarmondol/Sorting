import React, { Component } from 'react';
import './PageStyle.css';

class SelectionSortAlgo extends Component {
    render() {
        return (
            <div>
                <h1>Selection Sort Algorithm</h1>
                <div className="SetParagraph">
                    <p align="left">The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) 
                    from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.
                     </p>
                     <p align="left">

                     1.	The subarray which is already sorted.<br/>
2.	Remaining subarray which is unsorted.<br/><br/>
In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.
Following example explains the above steps:<br/>
Suppose an array DATA contains 5 elements as follows:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data:  33, 5, 1, 14, 23 <br/>
At the first step, Find the minimum value in Data [0,1,2,3,4] and swap the value at the first index. After first swap data would be,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data:  1, 5, 33, 14, 23<br/>
At the second step, Find the minimum value in Data [1,2,3,4] and swap the value at the second index. After second swap data would be,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data:  1, 5, 33, 14, 23<br/>
At the third step, Find the minimum value in Data [2,3,4] and swap the value at the third index. After third swap data would be,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data:  1, 5, 14, 33, 23<br/>
At the fourth step, Find the minimum value in Data [3,4] and swap the value at the fourth index. After fourth swap data would be,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data:  1, 5, 14, 23, 33<br/>
After fourth step Data will must be sorted.<br/>


                    </p>
                    
                    <p>Ref: https://en.wikipedia.org/wiki/Bubble_sort</p>
                    
                </div>
                <div className="SourceCode">
                    <p className="boldclass">
                        C++ Source Code for Selection Sort:
                    </p>
                    <div className="designCode">
                        <pre>
                            {`
                                const [animations, array] = getSelectionSortAnimations(this.state.array);
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
                                    if (animations[i][0] === "comp1" || (animations[i][0] === "comp2")) {
                                        const color = (animations[i][0] === "comp1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                                        const [temp, barOneIndex, barTwoIndex] = animations[i];
                                        console.log(animations[i]);
                                        console.log(temp); console.log(barOneIndex); console.log(barTwoIndex);
                                        const barOneStyle = arrayBars[barOneIndex].style
                                        const barTwoStyle = arrayBars[barTwoIndex].style;
                                        setTimeout(() => {
                                            barOneStyle.backgroundColor = color;
                                            barTwoStyle.backgroundColor = color;
                                        }, i * this.state.speedAuto);
                                    }
                                    else if (animations[i][0] === "colorChangedOne" || animations[i][0] === "colorChangedTwo") {
                                        const [temp, barIndex1, barIndex2] = animations[i];
                                        const colorbar = (animations[i][0] === "colorChangedOne") ? THIRD_COLOR : PRIMARY_COLOR;
                                        const barStyle1 = arrayBars[barIndex1].style;
                                        const barStyle2 = arrayBars[barIndex2].style;
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
                                        const [temp, barIndex, newHeight] = animations[i];
                                        const barStyle = arrayBars[barIndex].style;
                                        let bar = barValue[barIndex];
                                        setTimeout(() => {
                                            barStyle.height = newHeight*multiplypx;
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

export default SelectionSortAlgo;