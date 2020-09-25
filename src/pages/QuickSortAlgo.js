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
                                /*
                                Complexity best case: O(nlogn),average case: O(nlogn),worst case: O(n^2)
                            */
                            
                            #include<bits/stdc++.h>
                            using namespace std;
                            #define MX 1003
                            
                            int Partition(int *arr,int low,int high)
                            {
                                int pivot=arr[high];
                                int i=low;
                                for(int j=low;j<high;j++)
                                {
                                    if(arr[j]<pivot)
                                    {
                                        swap(arr[i],arr[j]);
                                        i++;
                                    }
                                }
                                swap(arr[i],arr[high]);
                                return i;
                            }
                            void quicksort(int *arr,int low,int high)
                            {
                                if(high<=low)
                                    return;
                                int p=Partition(arr,low,high);
                                quicksort(arr,low,p-1);
                                quicksort(arr,p+1,high);
                            }
                            int main()
                            {
                                int n;
                                int arr[MX];
                                scanf("%d",&n);
                                for(int i=0;i<n;i++)
                                {
                                    scanf("%d",&arr[i]);
                                }
                                quicksort(arr,0,n-1);
                                for(int i=0;i<n;i++)
                                {
                                    printf("%d ",arr[i]);
                            
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