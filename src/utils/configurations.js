import { MergeSort } from "../algorithm/Algorithm";

// colors setting
export const colorCompareVal = "coral";
export const colorSwapVal = "antiquewhite";
export const colorSortCompleteVal = "aqua";
export const colorMidVal = "red";
export const array1Color = "black";
export const array2Color = "grey";


// time initializations
export let swapTime = 1000;
export let compareTime = 500;



export let sortingArray = initArray();

export const mergeSortAlgo = [
  
  { component: MergeSort, title: "Merge", name: "MergeSort" }
];
// Default array
function initArray() {
  
  return [10, 9, 8, 7];
}
