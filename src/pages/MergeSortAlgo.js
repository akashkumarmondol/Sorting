import React, { Component } from 'react';
import './PageStyle.css';

class MergeSortAlgo extends Component {
    render() {
        return (
            <div>
                <h1>Merge Sort Algorithm</h1>
                <div className="SetParagraph">
                    <p align="left">Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.
Conceptually, a merge sort works as follows:<br/><br/>
1.	Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).<br/><br/>
2.	Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.<br/><br/>
The merge() function is used for merging two halves. The merge(arr, l, m, r) is key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one. See following C implementation for details.<br/><br/>

                     </p>
                     <p align="left">

                     MergeSort (arr[], l, r)<br/>
                        If( r &gt; l)<br/>
                        1.	Find the middle point to divide the array into two halves:<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;Middle, m=(l+r)/2<br/><br/>
                        2.	Call MergeSort for first half:<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;Call MergeSort(arr, l, m)<br/><br/>
                        3.	Call MergeSort for second half:<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;Call MergeSort(arr, m+1, r)<br/><br/>
                        4.	Merge the two halves sorted in step 2 and 3:<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;Call Merge(arr, l, m, r)<br/><br/>
                        Example: Given a array  Data: [38, 27, 43, 3, 9, 82, 10]. Data makes sorted using Merge Sort.<br/>

                    </p>
                    <img src={require('../images/MergeSort.png')} height="400px" width="400px"></img>
                    <p>Ref: https://en.wikipedia.org/wiki/Bubble_sort</p>
                    
                </div>
                <div className="SourceCode">
                    <p className="boldclass">
                        C++ Source Code for Merge Sort:
                    </p>
                    <div className="designCode">
                        <pre>
                            {`
                                const animations = getMergeSortAnimations(this.state.array);
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
                                            barStyle.height = newHeight*multiply} px;
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

export default MergeSortAlgo;