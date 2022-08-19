import React from "react";
import styled from "styled-components";
import { Input } from "./components/Input"; //controller
import { Vizualiser } from "./components/Vizualiser";  //algodisplay

const Container = styled.div`
  margin: 0 10px;
  min-height: calc(100vh - 50px);
  position: relative;
  margin-bottom: 50px;
  
  
`;

export default function App() {
  return (
    <Container>
      <h1 style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}> Merge Sort</h1>
      <Input />
      <Vizualiser />  
    </Container>
  );
}