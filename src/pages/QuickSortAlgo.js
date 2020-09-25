import React, { Component } from 'react';
import './PageStyle.css';

class QuickSortAlgo extends Component {
    render() {
        return (
            <div>
                <h1>Quick Sort Algorithm</h1>
                <div className="SetParagraph">
                    <p align="left">
                    Like Merge Sort, Quick Sort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the
                     picked pivot. There are many different versions of Quick Sort that pick pivot in different ways.<br/>
                     </p>
                     <p align="left">

                     1.	Always pick first element as pivot.<br/><br/>
                    2.	Always pick last element as pivot (implemented below)<br/><br/>
                    3.	Pick a random element as pivot.<br/><br/>
                    4.	Pick median as pivot.<br/><br/>
                    The key process in Quick Sort is partition(). Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.<br/><br/>
                    Example: Given an array Data: [ 10, 15, 1, 2, 6, 12, 5 ,7]. Data makes sorted using Quick Sort. Here the last value always picks as Pivot.<br/>


                    </p>
                    <img src={require('../images/QuickSort.png')} height="400px" width="400px"></img>
                    <p>Ref: https://en.wikipedia.org/wiki/Bubble_sort</p>
                    
                </div>
                <div className="SourceCode">
                    <p className="boldclass">
                        C++ Source Code for Quick Sort:
                    </p>
                    <div className="designCode">
                        <pre>
                            {`
                                const [animations, array] = getQuickSortAnimations(this.state.array);
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
                                        // console.log(animations[i]);
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
                                    else if (animations[i][0] === "pivot1" || animations[i][0] === "pivot2") {
                                        const [tempP, barIndexP, barIndexP2] = animations[i];
                                        const colorbarP = (animations[i][0] === "pivot1") ? SECONDARY_COLOR : FORTH_COLOR;
                                        const barStyleP = arrayBars[barIndexP].style;
                                        setTimeout(() => {
                                            barStyleP.backgroundColor = colorbarP;
                                        }, i * this.state.speedAuto);
                                    }
                                    else {
                                        const [temp, barIndex, newHeight] = animations[i];
                                        const barStyle = arrayBars[barIndex].style;
                                        let bar = barValue[barIndex];
                                        setTimeout(() => {
                                            barStyle.height = newHeight*multiply px;
                                            bar.innerHTML = newHeight ;
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

export default QuickSortAlgo;