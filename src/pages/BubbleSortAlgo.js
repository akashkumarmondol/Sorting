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
&nbsp;&nbsp;&nbsp;&nbsp;( 1 <b>7 5</b> 3 10) → ( 1 <b>5 7</b> 3 10 ), Swap since 7 &lt; 5<br/>
 &nbsp;&nbsp;&nbsp;&nbsp;( 1 5 <b>7 3</b> 10) → ( 1 5 <b>3 7 </b>10), Swap since 7 &lt; 3<br/>
( 1 5 3 <b>7 10</b>) → ( 1 5 3 <b>7 10</b> ), Now, since these elements are already in order (10 &lt; 7), algorithm does not swap them.<br/>
Second Pass<br/>
&nbsp;&nbsp;&nbsp;&nbsp;( <b>1 5</b>  3 7 10) → ( <b>1 5</b> 3 7 10)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;( 1 <b>5 3</b> 7 10) → ( 1 <b>3 5</b> 7 10), Swap since 5 &lt; 3<br/>
&nbsp;&nbsp;&nbsp;&nbsp;( 1 3 <b>5 7</b> 10) → ( 1 3 <b>5 7 </b>10)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;( 1 3 5 <b>7 10</b>) → ( 1 3 5 <b>7 10</b>)<br/>
Now, the array is already sorted, but the algorithm does not know if it is completed. The algorithm needs one whole pass without any swap to know it is sorted.<br/>
Third Pass<br/>
&nbsp;&nbsp;&nbsp;&nbsp;( <b>1 3</b> 5 7 10) → ( <b>1 3</b> 5 7 10)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;( 1 <b>3 5</b> 7 10) → ( 1 <b>3 5</b> 7 10)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;( 1 3 <b>5 7</b> 10) → ( 1 3 <b>5 7</b> 10)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;( 1 3 5 <b>7 10</b>) → ( 1 3 5 <b>7 10</b>)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Then Data: 1 3 5 7 10<br/>

                    </p>
                    <div align="left"><p>Time Complexity:<br/> &nbsp;&nbsp;&nbsp;&nbsp;Worst complexity: n^2 <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;Average complexity: n^2<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;Best complexity: n </p>
                    </div>
                    <div className="ForRef"> <p>Ref: <a href="https://en.wikipedia.org/wiki/Bubble_sort">https://en.wikipedia.org/wiki/Bubble_sort </a></p></div>
                    
                </div>
                <div className="SourceCode">
                    <p className="boldclass">
                        Source Code for Bubble Sort:
                    </p>
                    <div className="designCode" align="left">
                        <pre>
                            {`
                            ///complexity O(n^2)
                            #include<stdio.h>
                            int main()
                            {
                                int n,i,j,temp;
                                printf("Enter numbers of input:");
                                scanf("%d",&n);
                                int arr[n];
                                printf("enter some data: ");
                                for(i=0;i<n;i++)
                                {
                                    scanf("%d",&arr[i]);
                                }
                            
                                for(i=0;i<n;i++)
                                {
                                    for( j=0;j<n-i-1;j++)///Last i elements are already in place.
                                    {
                                        if(arr[j]>arr[j+1])
                                        {
                                            arr[j]=arr[j+1]-arr[j];
                                            arr[j+1]=arr[j+1]-arr[j];
                                            arr[j]=arr[j+1]+arr[j];
                                        }
                                    }
                                }
                                printf("After sorting: ");
                                for(i=0;i<n;i++)
                                    printf("%d ",arr[i]);
                                return 0;
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