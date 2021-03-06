var counter=0;
export function getMergeSortAnimations(array) {
    const animations = [];
    counter=0;
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return [animations,counter];
  }
  
  function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }

  // Now back to the right position
  
  function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations)
  {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      animations.push(["comp1",i, j]);
      animations.push(["comp2",i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        animations.push(["colorChangedOne",k,k]);
        animations.push(["swap",k, auxiliaryArray[i]]);
        animations.push(["colorChangedTwo",k,k]);
        mainArray[k++] = auxiliaryArray[i++];
      }
       else {
        animations.push(["colorChangedOne",k,k]);
        animations.push(["swap",k, auxiliaryArray[j]]);
        animations.push(["colorChangedTwo",k,k]);
        mainArray[k++] = auxiliaryArray[j++];
      }
      counter++;
    }
    while (i <= middleIdx) {
      //animations.push([i, i]);
      //animations.push([i, i]);
      animations.push(["colorChangedOne",k,k]);
      animations.push(["swap",k, auxiliaryArray[i]]);
      animations.push(["colorChangedTwo",k,k]);
      mainArray[k++] = auxiliaryArray[i++];
      counter++;
    }
    while (j <= endIdx) {
     // animations.push([j, j]);
     // animations.push([j, j]);
     animations.push(["colorChangedOne",k,k]);
      animations.push(["swap",k, auxiliaryArray[j]]);
      animations.push(["colorChangedTwo",k,k]);
      mainArray[k++] = auxiliaryArray[j++];
      counter++;
    }
  }
  