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
                                #include<stdio.h>
                                int main()
                                {
                                    int size,loc,temp,j,i,min;
                                    scanf("%d",&size);
                                    int arr[size];
                                    for(i=0;i<size;i++)
                                        scanf("%d",&arr[i]);
                                
                                    for(i=0;i<size;i++)
                                    {
                                        min=arr[i];
                                        loc=i;
                                        for(j=i+1;j<size;j++)
                                        {
                                            if(arr[j]<min)
                                            {
                                                min=arr[j];
                                                loc=j;
                                            }
                                        }
                                        temp=arr[i];
                                        arr[i]=arr[loc];
                                        arr[loc]=temp;
                                    }
                                
                                    for(i=0;i<size;i++)
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

export default SelectionSortAlgo;