import React, { Component } from 'react';
import './PageStyle.css';

class HeapSortAlgo extends Component {
    render() {
        return (
            <div>
                <h1>Heap Sort Algorithm</h1>
                <div className="SetParagraph">
                    <p align="left">Let us first define a Complete Binary Tree. A complete binary tree is a binary tree in which
                     every level, except 
                    possibly the last, is completely filled, and all nodes are as far left as possible.<br/>
                    A Binary Heap is a Complete Binary Tree where items are stored in a special order such that value in
                     a parent node is greater(or smaller) than the values in its two children nodes. The former is called as
                     max heap and the latter is called min-heap. The heap can be represented by a binary tree or array.
                     </p>
                     <p className="boldclass">
                     Heap Sort Algorithm for sorting in increasing order:
                     </p>
                     <p align="left">
                     1.	Build a max heap from the input data.<br/><br/>
2.	At this point, the largest item is stored at the root of the heap. Replace it with the last item of the heap followed by reducing the size of heap by 1. Finally, heapify the root of the tree.<br/><br/>
3.	Repeat step 2 while size of heap is greater than 1.<br/><br/>

Let { 4, 5, 3, 1, 2 } be the list that we want to sort from the smallest to the largest  using Heap Sort. Where we use array.  If the parent node is stored at index I, the left child can be calculated by 2 * I + 1 and right child by 2 * I + 2 (assuming the indexing starts at 0).<br/>

                    </p>
                    <img src={require('../images/BuildHeap.png')} height="400px" width="400px"></img>
                    
                    <img src={require('../images/SortHeap.png')} height="400px" width="400px"></img>
                    <p>Ref: https://en.wikipedia.org/wiki/Bubble_sort</p>
                    
                </div>
                <div className="SourceCode">
                    <p className="boldclass">
                        C++ Source Code for Heap Sort:
                    </p>
                    <div className="designCode">
                        <pre>
                            {`
                            const [animations, array] = getHeapSortAnimations(this.state.array);
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

export default HeapSortAlgo;