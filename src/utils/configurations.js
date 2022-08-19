import { getScreenWidth } from "./environment";
import { MergeSort } from "../algorithm/Algorithm";

// colors setting
export const comparisionColor = "coral";
export const swapColor = "antiquewhite";
export const sortedColor = "aqua";
export const pivotColor = "coral";
export const array1Color = "black";
export const array2Color = "grey";


// time setting
export let swapTime = 1000;
export let compareTime = 500;


// init array
export let sortingArray = initArrayForScreenSize();

export const sortingAlgorithms = [
  
  { component: MergeSort, title: "Merge", name: "MergeSort" }
];
//CHange time

function initArrayForScreenSize() {
  
  return [10, 9, 8, 7];
}
