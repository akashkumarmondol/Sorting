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
                    //here i want to show BuildHeap Image
                    //Here i want to show SortHeap Image
                    <p>Ref: https://en.wikipedia.org/wiki/Bubble_sort</p>
                    
                </div>
                <div className="SourceCode">
                    <p className="boldclass">
                        C++ Source Code for Bubble Sort:
                    </p>
                    <div className="designCode">

                    </div>


                </div>
            </div>
        );
    }
}

export default HeapSortAlgo;