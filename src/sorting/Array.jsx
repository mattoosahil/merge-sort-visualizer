import React from "react";
import styled from "styled-components";
import {
  colorCompareVal,
  colorSwapVal,
  colorSortCompleteVal,
  colorMidVal,
  array2Color,
  array1Color
} from "../utils/configurations";
import { useControls } from "../utils/const";
import {
    ArrContainer,
    ArrElements,
    sourceAnimation,
    destinationAnimation,
  } from "../utils/style";
  

let swapTime = useControls.getState().swapTime;
useControls.subscribe(
  (time) => (swapTime = time),
  (state) => state.swapTime
);


const Source = styled(ArrElements)`
  animation: ${(props) => destinationAnimation(props.distance, colorSwapVal)}
    ${() => swapTime / 1000}s forwards;
`;

const Destination = styled(ArrElements)`
  animation: ${(props) => sourceAnimation(props.distance, colorSwapVal)}
    ${() => swapTime / 1000}s forwards;
`;

export function Array({
  array,
  source,
  destination,
  pivot = -1,
  highlightIndices,
  sortedIndices,
}) {

  function getBackgroundColor(i) {
    if (i === pivot) {
      return colorMidVal;
    }

    if (highlightIndices.includes(i)) {
      return colorCompareVal;
    }

    if (sortedIndices.includes(i)) {
      return colorSortCompleteVal;
    }
    return "";
  }

  return (
    <ArrContainer>
      {array.map((value, i) => {
        if (i === source) {
          return (
            <Source
              key={i + ":" + source + ":" + destination + ":" + value}
              distance={destination - source}
             
              style={{
                order: destination,
                backgroundColor: getBackgroundColor(i),
              }}
            >
              {value}
            </Source>
          );
        }
        if (i === destination) {
          return (
            <Destination
              key={i + ":" + destination + ":" + source + ":" + value}
              distance={destination - source}
              style={{
                order: source,
                backgroundColor: getBackgroundColor(i),
              }}
            >
              {value}
            </Destination>
          );
        }
        return (
          <ArrElements
            key={i + ":" + destination + ":" + source + ":" + value}
            style={{
              order: i,
              backgroundColor: getBackgroundColor(i),
            }}
          >
            {value}
          </ArrElements>
        );
      })}
    </ArrContainer>
  );
}
