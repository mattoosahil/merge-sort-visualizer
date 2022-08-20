import React, { useEffect } from "react";
import styled from "styled-components";
import { mergeSortAlgo } from "../utils/configurations";
import { useControls, useData } from "../utils/const";
import shallow from "zustand/shallow";
import { Sort } from "../sorting/Sort";

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  column-gap: 10px;
  row-gap: 10px;
  outline: none;
  border:none;
  
  

  & > div {
    max-width: 100%;
    min-width: 375px;
  }
`;

const flexCenter = { display: "flex", justifyContent: "center" };

function HelperBase(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="HelperBase"
      hidden={value !== index}
      id={`scrollable-auto-HelperBase-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
      style={{ maxWidth: "100%" }}
    >
      {value === index && children}
    </div>
  );
}

export function Vizualiser() {
  const refreshSort = useControls((state) => state.refreshSort);

  const [sortingArray, algorithm] = useData(
    (state) => [state.sortingArray, state.algorithm],
    shallow
  );

  useEffect(() => {
    refreshSort();
  }, [algorithm]);

  if (sortingArray.length === 0)
    return (
      <h2 style={flexCenter}>
        Please enter input array
      </h2>
    );

  return (
    
    <div style={flexCenter}>
        
      {mergeSortAlgo.map((algoInfo, idx) => (
        <HelperBase value={algorithm} index={idx} key={algoInfo.name}>
          <Sort
            array={sortingArray}
            sortProcedure={algoInfo.component}
            algoName={algoInfo.name}
          />
        </HelperBase>
      ))}
      <HelperBase value={algorithm} index={mergeSortAlgo.length}>
        <FlexWrap>
          {mergeSortAlgo.map((algoInfo) => (
            <Sort
              array={sortingArray}
              sortProcedure={algoInfo.component}
              algoName={algoInfo.name}
              key={algoInfo.name}
            />
          ))}
        </FlexWrap>
      </HelperBase>
    </div>
  );
}
