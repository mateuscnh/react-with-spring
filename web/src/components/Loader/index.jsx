import React from "react";
import styled, { keyframes } from "styled-components";

const SpinAnimate = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const Container = styled.div`
  margin: 32px auto;
  border: 8px solid #dbdbdb;
  border-top: 8px solid #2a004f;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${SpinAnimate} 1s linear infinite;
`;

function Loader() {
  return <Container />;
}

export default Loader;
