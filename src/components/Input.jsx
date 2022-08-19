import React, { useState } from "react";
import styled from "styled-components";

import { BsFillPlayFill } from "@react-icons/all-files/bs/BsFillPlayFill"; 
import { TiRefreshOutline } from "@react-icons/all-files/ti/TiRefreshOutline";  
import { BsPauseFill } from "@react-icons/all-files/bs/BsPauseFill";         

import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";
import { delay } from "../utils/environment";

import shallow from "zustand/shallow";
import { useControls, useData } from "../utils/const";
import {
  convertInputToArrayString,
  convertArrayStringToArray,
  getRandomArray,
} from "../utils/environment";

const ControlBar = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin: 15px 0;
  flex-wrap: wrap;
`;

const ArrayBar = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 60%;
  flex-grow: 1;
  min-width: 300px;
`;

const ExecutionBar = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 40%;
  flex-grow: 1;
`;

export function Input() {

  const [isPausing, setIsPausing] = useState(false);

  const [progress, speed] = useControls(
    (state) => [state.progress, state.speed],
    shallow
  );

  const [sortingArray, setSortingArray] = useData(
    (state) => [state.sortingArray, state.setSortingArray],
    shallow
  );

  const [startSorting, pauseSorting, resetSorting, setSpeed] = useControls(
    (state) => [
      state.startSorting,
      state.pauseSorting,
      state.resetSorting,
      state.setSpeed,
    ],
    shallow
  );

  const [arrayInput, setArrayInput] = useState(sortingArray);

  const startElement = <BsFillPlayFill onClick={startSorting} />;
  const pauseElement = <BsPauseFill onClick={pauseAndDelaySorting} />;
  const resetElement = <TiRefreshOutline onClick={resetSorting} />;
  const disabledPauseElement = <BsPauseFill style={{ color: "#e5e5e5" }} />;

  async function pauseAndDelaySorting(){
    pauseSorting();
    setIsPausing(true);
    await delay(useControls.getState().swapTime);
    setIsPausing(false);
  }

  function arrayDataChangeHandler(value) {
    const arrayString = convertInputToArrayString(value);
    setArrayInput(arrayString);

    const array = convertArrayStringToArray(arrayString);
    setSortingArray(array);
    resetSorting();
  }

  function generate() {
    const randomArray = getRandomArray();
    setArrayInput(randomArray);
    setSortingArray(randomArray);
    resetSorting();
  }

  function getProgressButton() {
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
    <ControlBar>
      <ArrayBar
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
       

        <TextField
          id="standard-basic"
          label="Array Input"
          variant="standard"
          onChange={(event) => arrayDataChangeHandler(event.target.value)}
          value={arrayInput}
          size="medium"
          width="100px"
         
        />
        <div style={{ display: "flex", marginLeft: '20px', columnGap: '5px' }}>
          {getProgressButton()}
          {resetElement}
        </div>
         
      </ArrayBar>
      <ExecutionBar>
        <Slider
          key={`slider-${speed}`}
          defaultValue={speed}
          onChange={(event, value) => setSpeed(value)}
          
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={10}
          style={{ flexGrow: 1, flexBasis: "100%" }}
        />

        
      </ExecutionBar>
    </ControlBar>
  );
}
