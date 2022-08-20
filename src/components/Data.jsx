import React, { Component } from 'react'

export function  Data() {
  
    return (
      <div
      style={{
        paddingRight:"200px",
        paddingLeft:"200px",
        fontFamily: "sans-serif",
        color:"white"

      }}
      >
        <div
         style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px"}}
        >
        <h3>What does the colors indicate:{"\u00a0\u00a0"} </h3>
        <h5 style={{color:"aqua",justifyContent: "center",
            alignItems: "center"}}> Blue- sorted; {"\u00a0\u00a0"}{"\u00a0\u00a0"} </h5>
        <h5 style={{color:"coral",justifyContent: "center",
            alignItems: "center"}}> Orange- comparing;{"\u00a0\u00a0"}{"\u00a0\u00a0"} </h5>
        <h5 style={{color:"antiquewhite",justifyContent: "center",
            alignItems: "center"}}> White- swapping;{"\u00a0\u00a0"}{"\u00a0\u00a0"} </h5>
        </div>
        
        
        <h2
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>ABOUT MERGE SORT ALGORITHM</h2>
        <p
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "sans-serif"
          }}>Merge sort is a kind of sorting algorithm using which we can sort an unsorted array.
             This algorithm follows the divide and conquer strategy. In divide and conquer, we divide the problem into sub-problems, 
             then solve those sub-problems and combine the solutions to solve 
            the whole problem. Similarly, in merge sort the input array is split into two equal parts and then sorted and combined.</p>
            <p
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "sans-serif"
              }}>
            In merge sort the input array is divided into halves recursively. This stops when there is only one element left and cannot be divided further. This means that if the array had n elements, then after recursively dividing the array into equal parts we end up with n arrays with one element each. Also, all these n arrays are sorted. After this the process to merge the arrays start. In this process, left arrays are paired up with their right counter-part and then the elements are compared. For each two arrays first elements are compared. Then the smaller element is inserted into the output-array. The pointer for the current smallest element for that array points to next element. Then the current smallest element of both the arrays are compared and the smaller element is stored into the output array. This process takes place until all the stack calls are completed. At the end of this process the output array is a sorted array, calculated in O(n log(n)) time complexity.
            </p>

            
<h3 style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif"
  }}>Time Complexity: O(n log(n))</h3>

<h3 style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif"
  }}>Recursive relation: T(n) = 2T(n/2) + θ(n)</h3>
        </div>
    )
  
}
