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
                    <img src={require('../images/BuildHeap.png')} height="500px" width="800px"></img>
                    
                    <img src={require('../images/SortHeapNew.png')} height="800px" width="800px"></img><br/>
                    <div align="left"><p>Time Complexity:<br/> &nbsp;&nbsp;&nbsp;&nbsp;Worst complexity:  n*log(n) <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;Average complexity:  n*log(n)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;Best complexity:  n*log(n) </p>
                    </div>
                    <div className="ForRef"> <p>Ref: <a href="https://en.wikipedia.org/wiki/Heapsort">https://en.wikipedia.org/wiki/Heapsort </a></p></div>
                    
                </div>
                <div className="SourceCode">
                    <p className="boldclass">
                        Source Code for Heap Sort:
                    </p>
                    <div className="designCode" align="left">
                        <pre>
                            {`
                            #include<stdio.h>

                            int arr[100];
                            
                            void swap(int large,int i)
                            {
                                int temp;
                                temp=arr[large];
                                arr[large]=arr[i];
                                arr[i]=temp;
                            }
                            
                            void heapify(int n,int i)
                            {
                                int large=i,lc=2*i+1,rc=2*i+2;
                            
                                if(lc<n&&arr[large]<arr[lc])
                                    large=lc;
                            
                                if(rc<n&&arr[large]<arr[rc])
                                    large=rc;
                            
                                if(large!=i)
                                {
                                    swap(large,i);
                            
                                    heapify(n,large);
                                }
                            }
                            
                            void heapsort(int n)
                            {
                                int i;
                                for(i=n/2-1;i>=0;i--)
                                    heapify(n,i);
                                for(i=n-1;i>=0;i--)
                                {
                                    swap(i,0);
                            
                                    heapify(i,0);
                                }
                            }
                            
                            int main()
                            {
                                int i,n;
                                printf("Array size:");
                                scanf("%d",&n);
                                printf("Enter elements:");
                                for(i=0;i<n;i++)
                                    scanf("%d",&arr[i]);
                                heapsort(n);
                            
                                printf("Show sorted elements:");
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

export default HeapSortAlgo;