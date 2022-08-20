import React, { useState } from "react";
import styled from "styled-components";

import { BsFillPlayFill } from "@react-icons/all-files/bs/BsFillPlayFill"; 
import { TiRefreshOutline } from "@react-icons/all-files/ti/TiRefreshOutline";  
import { BsPauseFill } from "@react-icons/all-files/bs/BsPauseFill";         

import TextField from "@material-ui/core/TextField";
import { delay } from "../utils/environment";

import shallow from "zustand/shallow";
import { useControls, useData } from "../utils/const";
import {
  inputToArrConverter,
  stringToArrConvertor,
} from "../utils/environment";



const InputContainer = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin: 15px 0;
  flex-wrap: wrap;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 60%;
  flex-grow: 1;
  min-width: 300px;
  color:white !important;
`;


export function Input() {

  const [isPausing, setStop] = useState(false);

  const [progress, speed] = useControls(
    (state) => [state.progress, state.speed],
    shallow
  );

  const [sortingArray, setSortingArray] = useData(
    (state) => [state.sortingArray, state.setSortingArray],
    shallow
  );

  const [playSort, storeSortProgress, refreshSort, setSwappingSpeed] = useControls(
    (state) => [
      state.playSort,
      state.storeSortProgress,
      state.refreshSort,
      state.setSwappingSpeed,
    ],
    shallow
  );

  const [arrayInput, setArrayInput] = useState(sortingArray);

  const startElement = <BsFillPlayFill onClick={playSort} />;
  const pauseElement = <BsPauseFill onClick={pauseAndDelaySorting} />;
  const resetElement = <TiRefreshOutline onClick={refreshSort} />;
  const disabledPauseElement = <BsPauseFill style={{ color: "#e5e5e5" }} />;

  async function pauseAndDelaySorting(){
    storeSortProgress();
    setStop(true);
    await delay(useControls.getState().swapTime);
    setStop(false);
  }

  function arrayDataChangeHandler(value) {
    const arrayString = inputToArrConverter(value);
    setArrayInput(arrayString);

    const array = stringToArrConvertor(arrayString);
    setSortingArray(array);
    refreshSort();
  }


  function getProgressButton() {

   setSwappingSpeed(1)
    if(isPausing)
      return disabledPauseElement;

    switch (progress) {
      case "reset":
        return startElement;
      case "start":
        return pauseElement;
      case "pause":
        return startElement;
      case "done":
        return disabledPauseElement;
    }
  }

  return (
    <InputContainer>
      <MainContainer
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color:"white !important"
      }}>
       

        <TextField
          id="standard-basic"
          label="Array Input"
          variant="standard"
          onChange={(event) => arrayDataChangeHandler(event.target.value)}
          value={arrayInput}
          size="medium"
          width="100px"
          color="white !important"
         
        />
        <div style={{ display: "flex", marginLeft: '20px', columnGap: '5px' }}>
          {getProgressButton()}
          {resetElement}
        </div>
         
      </MainContainer>
      
    </InputContainer>
  );
}
