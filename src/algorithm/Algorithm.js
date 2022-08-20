export async function* MergeSort(
    arrayInput,
    join,
    focus,
    markSorted,
    offSetValue = 0,
    finalResult = true
  ) {
    console.log("arrayInput:::", arrayInput)
    console.log("join:::", join)
    console.log("focus:::", focus)
    console.log("markSorted:::", markSorted)
    console.log("offSetValue:::", offSetValue)
    console.log("finalResult:::", finalResult)
    
    if (arrayInput.length === 1) {
      if(finalResult)
        markSorted(0);
      return arrayInput;
    }
  
   
    const middleVal = Math.floor(arrayInput.length / 2);
    const leftVal = arrayInput.slice(0, middleVal);
    const rightVal = arrayInput.slice(middleVal);
    // First recursively call mergeSort to divide the arrayInput
    // Then call merge function on the divided arrayInputs
    const arr = yield* await merge(
      yield* await MergeSort(leftVal, join, focus, markSorted, offSetValue, false),
      yield* await MergeSort(rightVal, join, focus, markSorted, offSetValue + middleVal, false),
      offSetValue,
      offSetValue + middleVal,
      finalResult,
      markSorted
    );
    console.log(arr)
    return arr;
  
    // Definition  of Merge function 
    async function* merge(leftVal, rightVal, off1, off2, finalResult = false, markSorted) {
      let outputArray = [];  // initialize the output arrayInput
      let leftSmallestIndex = 0;  // initialize the leftVal index
      let rightSmallestIndex = 0;  // initialize the rightVal index
        // Checking if the index are less than the arrayInput length
      while (leftSmallestIndex < leftVal.length && rightSmallestIndex < rightVal.length) {
        if (leftVal[leftSmallestIndex] <= rightVal[rightSmallestIndex]) {         // comparing leftVal and rightVal arrayInputs (smallest element) and bringing smallest element to the end of the output arrayInput
          yield await focus([off1 + leftSmallestIndex + rightSmallestIndex, off2 + rightSmallestIndex]);
          yield await join(
            off1 + leftSmallestIndex + rightSmallestIndex,
            off1 + outputArray.length,
          );
          if(finalResult)
            yield await markSorted(off1 + outputArray.length);
          outputArray.push(leftVal[leftSmallestIndex]);
          leftSmallestIndex++;
        } else {
          yield await focus([off1 + leftSmallestIndex + rightSmallestIndex, off2 + rightSmallestIndex]);
          yield await join(off2 + rightSmallestIndex, off1 + outputArray.length);
          if(finalResult)
            yield await markSorted(off1 + outputArray.length);
          outputArray.push(rightVal[rightSmallestIndex]);
          rightSmallestIndex++;
        }
      }
      // Checking any elements remaining in  the leftVal arrayInput
      while (leftSmallestIndex < leftVal.length) {
        yield await focus([off1 + leftSmallestIndex + rightSmallestIndex]);
        if(finalResult)
          yield await markSorted(off1 + leftSmallestIndex + rightSmallestIndex);
        outputArray.push(leftVal[leftSmallestIndex]);
        leftSmallestIndex++;
      }
  // Checking any elements remaining in  the rightVal arrayInput
      while (rightSmallestIndex < rightVal.length) {
        yield await focus([off1 + leftSmallestIndex + rightSmallestIndex]);
        if(finalResult)
          yield await markSorted(off1 + leftSmallestIndex + rightSmallestIndex);
        outputArray.push(rightVal[rightSmallestIndex]);
        rightSmallestIndex++;
      }
      console.log("outputArray", outputArray);
      return outputArray;
      
    }
  }
  