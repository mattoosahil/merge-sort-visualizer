import React from "react";
import styled from "styled-components";
import { Input } from "./components/Input"; 
import { Vizualiser } from "./components/Vizualiser";  
import { Data } from "./components/Data";

const Container = styled.div`
  margin: 0 10px;
  min-height: calc(100vh - 50px);
  position: relative;
  margin-bottom: 50px;
  background-color: gray;
  
  
`;

export default function App() {
  return (
    
    
    <Container>
      <h1 style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color:"white"
    }}> Merge Sort</h1>
      
      <Input />
      <h2 style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color:"white",
        margin: "30px"
      }}> Vizualiser</h2>
      <Vizualiser />  
      <Data />
    </Container>
  );
}