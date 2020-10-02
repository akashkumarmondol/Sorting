var counter=0;
export function getBubbleSortAnimations(array)
{
    let animations=[];
    bubbleSort(array,animations);
    return [animations,array,counter];
}
function bubbleSort(array,animations)
{
    const N=array.length;
    for(let i=0;i<N-1;i++)
    {
        for(let j=0;j<N-i-1;j++)
        {
            animations.push(["comp1",j,j+1]);
            animations.push(["comp2",j,j+1]);
            
            if(array[j]>array[j+1])
            {
                animations.push(["colorChangedOne",j,j+1]);
                animations.push(["swap",j,array[j+1]]);
                animations.push(["swap",j+1,array[j]]);
                animations.push(["colorChangedTwo",j,j+1]);
                const temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
            counter++;
        }
        animations.push(["Fixed",N-i-1]);
        counter++;
    }
    animations.push(["Fixed",0]);
}