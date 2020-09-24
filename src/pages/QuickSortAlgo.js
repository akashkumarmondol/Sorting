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
                    //Quick Sort image Show here;
                    <p>Ref: https://en.wikipedia.org/wiki/Bubble_sort</p>
                    
                </div>
                <div className="SourceCode">
                    <p className="boldclass">
                        C++ Source Code for Selection Sort:
                    </p>
                    <div className="designCode">
                        <a>https://ideone.com/LZ4yfh</a>

                    </div>


                </div>
            </div>
        );
    }
}

export default QuickSortAlgo;