import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colorCompareVal, colorSwapVal, colorSortCompleteVal } from "../utils/configurations";
import {
  ArrContainer,
  ArrElements,
  swapAnimation,
  moveAnimation,
} from "../utils/style";
import { useControls } from "../utils/const";

let swapTime = useControls.getState().swapTime;
useControls.subscribe(
  (time) => (swapTime = time),
  (state) => state.swapTime
);

const AnimatedItem = styled(ArrElements)`
  animation: ${(props) => swapAnimation(props.distance, colorSwapVal)}
    ${() => swapTime / 1000}s forwards;
`;

const MoveItem = styled(ArrElements)`
  animation: ${moveAnimation()} ${() => swapTime / 1000}s forwards;
`;

const generateItems = (setItems, source, destination) => {
  setItems((items) => {
    const newItems = [...items];

    const temp = newItems[source];
    for (let i = source; i > destination; i--) {
      newItems[i] = newItems[i - 1];
    }

    newItems[destination] = temp;
    return newItems;
  });
};

export function Merge({
  array,
  source,
  destination,
  hightlightedIndices,
  sortedIndices,
}) {
  const [items, setItems] = useState([...array]);

  useEffect(() => {
    if (source !== -1 && destination !== -1) {
      generateItems(setItems, source, destination);
    }
  }, [source, destination]);

  useEffect(() => {
    setItems([...array]);
  }, [array]);

  function getBackgroundColor(i) {
    if (sortedIndices.includes(i)) {
      return colorSortCompleteVal;
    }

    if (hightlightedIndices.includes(i)) {
      return colorCompareVal;
    }

    return "";
  }

  return (
    <>
      <ArrContainer>
        {items.map((value, i) => {
          if (i === destination) {
            return (
              <AnimatedItem
                key={i + ":" + value}
                style={{
                  order: source + 1,
                  backgroundColor: getBackgroundColor(i),
                }}
                distance={source - destination}
              >
                {value}
              </AnimatedItem>
            );
          } else if (i > destination && i <= source) {
            return (
              <MoveItem
                key={i + ":" + value}
                style={{
                  order: i,
                  backgroundColor: getBackgroundColor(i),
                  transform: "translate(50px)",
                }}
              >
                {value}
              </MoveItem>
            );
          } else {
            return (
              <ArrElements
                key={i + ":" + value}
                style={{
                  order: i,
                  backgroundColor: getBackgroundColor(i),
                }}
              >
                {value}
              </ArrElements>
            );
          }
        })}
      </ArrContainer>
    </>
  );
}
