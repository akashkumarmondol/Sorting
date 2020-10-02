import React, { Component } from 'react';
import './PageStyle.css';

class InsertionSortAlgo extends Component {
    render() {
        return (
            <div>
                <h1>Insertion Sort Algorithm</h1>
                <div className="SetParagraph">
                    <p align="left">Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands
                    . The array is virtually split into a sorted and an unsorted part.
                    Values from the unsorted part are picked and placed at the correct position in the sorted part.
                     </p>
                    <p className="boldclass">
                        Algorithm
                     </p>
                    <p align="left">

                        To sort an array of size n in ascending order:<br /><br />
1. Iterate from arr[1] to arr[n] over the array.<br /><br />
2. Compare the current element (key) to its predecessor.<br /><br />
3. If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.<br /><br />
Example: <br />
                    </p>
                    <img src={require('../images/insertionsort.png')} height="400px" width="400px"></img>
                    <div align="left"><p>Time Complexity:<br/> &nbsp;&nbsp;&nbsp;&nbsp;Worst complexity: n^2 <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;Average complexity: n^2<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;Best complexity: n </p>
                    </div>
                    <div className="ForRef"> <p>Ref: <a href="https://www.geeksforgeeks.org/insertion-sort/">https://www.geeksforgeeks.org/insertion-sort/ </a></p></div>
                    

                </div>
                <div className="SourceCode">
                    <p className="boldclass">
                        Source Code for Insertion Sort:
                    </p>
                    <div className="designCode" align="left">
                        <pre>
                            {`
                            ///cpmlexity O(n^2)
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
                            
                                for(i=1;i<n;i++)
                                {
                                    int j=i-1,val=arr[i];
                                    while(j>=0&&arr[j]>val)
                                    {
                                        arr[j+1]=arr[j];
                                        j--;
                                    }
                                    arr[j+1]=val;
                                }
                                printf("After sorting: ");
                                for(i=0;i<n;i++)
                                    printf("%d ",arr[i]);
                                return 0;
                            }
                            `
                            }</pre>
                    </div>


                </div>
            </div>
        );
    }
}

export default InsertionSortAlgo;