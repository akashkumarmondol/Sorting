var counter=0;
export function getSelectionSortAnimations(array)
{
    let animations = [];
    selectionSort(array,animations);
    //console.log(array);
    let len=animations.length;
    return [animations,array,counter];
}

function selectionSort(array,animations)
{
    const n=array.length;
    for(let i=0;i<n-1;i++)
    {
        let minIdx=i;
        for(let j=i+1;j<n;j++)
        {
            animations.push(["comp1",j,minIdx]);//first for select secondary color
            animations.push(["comp2",j,minIdx]);//second for back to the 1st color
            if(array[j]<array[minIdx])
            {
                minIdx=j;
            }
            counter++;
        }
        animations.push(["colorChangedOne",minIdx,i]);
        animations.push(["swap",minIdx,array[i]]);
        animations.push(["swap",i,array[minIdx]]);
        animations.push(["colorChangedTwo",minIdx,i]);
        let temp=array[minIdx];
        array[minIdx]=array[i];
        array[i]=temp;
        animations.push(["Fixed",i]);
        counter++;
    }
    animations.push(["Fixed",n-1]);
}