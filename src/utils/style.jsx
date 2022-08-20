import styled, { keyframes } from "styled-components";

export const ArrContainer = styled.div`
  display: flex;
  height: 175px;
  justify-content: center;
  align-items: center;
  padding: 15px;
  overflow: auto;color:"white"
`;

export const ArrElements = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  flex-shrink: 0;
  color:"white";

`;
export const sourceAnimation = (distance, colorSwapVal) => keyframes`
  0%{
    background-color: ${colorSwapVal};
  }
  40%{
    transform: translate(0px, 0px);
    background-color: ${colorSwapVal};
  }
  60% {
    transform: translate(0px, -50px);
    background-color: ${colorSwapVal};
  }
  80% {
    transform: translate(${distance * 50}px, -50px);
    background-color: ${colorSwapVal};
  }
  99% {
    transform: translate(${distance * 50}px, 0px);
    background-color: ${colorSwapVal};
  }
  100%{
    transform: translate(${distance * 50}px, 0px);
    background-color: none;
  }
`;

export const swapAnimation = (distance, colorSwapVal) => keyframes`
  0%{
    background-color: ${colorSwapVal};
  }
  10%{
    transform: translate(0px, 0px);
    background-color: ${colorSwapVal};
  }
  30% {
    transform: translate(0px, -50px);
    background-color: ${colorSwapVal};
  }
  70% {
    transform: translate(-${distance * 50}px, -50px);
    background-color: ${colorSwapVal};
  }
  99% {
    transform: translate(-${distance * 50}px, 0px);
    background-color: ${colorSwapVal};
  }
  100%{
    transform: translate(-${distance * 50}px, 0px);
  }
`;

export const moveAnimation = () => keyframes`
  0%{
    transform: translate(0px, 0px);
  }
  100%{
    transform: translate(50px, 0px);
  }
`;

export const destinationAnimation = (distance, colorSwapVal) => keyframes`
  0%{
    background-color: ${colorSwapVal};
  }
  40%{
    transform: translate(0px, 0px);
    background-color: ${colorSwapVal};
  }
  60% {
    transform: translate(0px, 50px);
    background-color: ${colorSwapVal};
  }
  80% {
    transform: translate(-${distance * 50}px, 50px);
    background-color: ${colorSwapVal};
  }
  99% {
    transform: translate(-${distance * 50}px, 0px);
    background-color: ${colorSwapVal};
  }
  100%{
    transform: translate(-${distance * 50}px, 0px);
    background-color: none;
  }
`;

