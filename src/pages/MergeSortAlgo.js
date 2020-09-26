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
                    <div className="ForRef"> <p>Ref: <a href="https://www.geeksforgeeks.org/merge-sort/">https://www.geeksforgeeks.org/merge-sort/</a></p></div>
                    
                </div>
                <div className="SourceCode">
                    <p className="boldclass">
                        Source Code for Merge Sort:
                    </p>
                    <div className="designCode" align="left">
                        <pre>
                            {`
                                ///complexity O(nlogn)

                                #include<stdio.h>
                                
                                #define arr_size 1000
                                
                                int arr[arr_size];
                                int temp[arr_size];
                                
                                void merge(int start,int mid,int end)
                                {
                                    int first_arr_start=start,second_arr_start=mid+1;
                                    int i;
                                
                                    for(i=first_arr_start;first_arr_start<=mid&&second_arr_start<=end;i++)///akhane 2i ta array(kalponik) dhora hoise and 2i ta array ke assending order e merge kora hoise
                                    {
                                        if(arr[first_arr_start]<arr[second_arr_start])
                                        {
                                            temp[i]=arr[first_arr_start];
                                            first_arr_start++;
                                        }
                                        else
                                        {
                                            temp[i]=arr[second_arr_start];
                                            second_arr_start++;
                                        }
                                    }
                                
                                    while(first_arr_start<=mid)///jodi 2i ta array merge korar somoy 2nd array list zero hoiye jai and tokhno 1st er list e elements thake then 1st array elements gula por por new list e rakha holo
                                    {
                                        temp[i]=arr[first_arr_start];
                                        first_arr_start++;
                                        i++;
                                    }
                                    while(second_arr_start<=end)///jodi 2i ta array merge korar somoy 1st array list zero hoiye jai and tokhno 2nd er list e elements thake then 2nd array elements gula por por new list e rakha holo
                                    {
                                        temp[i]=arr[second_arr_start];
                                        second_arr_start++;
                                        i++;
                                    }
                                
                                    for(i=start;i<=end;i++)
                                    {
                                        arr[i]=temp[i];///temporary array er elements gula main array te assign kora holo.
                                    }
                                }
                                
                                void sorting(int start,int end)
                                {
                                    int mid;
                                    if(start>=end)
                                        return;
                                    mid=(start+end)/2;
                                
                                    sorting(start,mid);
                                    sorting(mid+1,end);
                                
                                    merge(start,mid,end);
                                }
                                
                                int main()
                                {
                                    int n,i,j;
                                    printf("Enter numbers of input data:");
                                    scanf("%d",&n);
                                    printf("Enter %d elements: ",n);
                                    for(i=0;i<n;i++)
                                        scanf("%d",&arr[i]);
                                
                                    sorting(0,n-1);
                                
                                    printf("After sorting: ");
                                    for(i=0;i<n;i++)
                                        printf("%d ",arr[i]);
                                    printf(" ");
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

export default MergeSortAlgo;