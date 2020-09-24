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
                    //MergeSort image Show here;
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

export default MergeSortAlgo;