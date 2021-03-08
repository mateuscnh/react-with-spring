import { Spin } from "antd";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin: 40px 0;
`;

function Loader({ size }) {
  return (
    <Container>
      <Spin size={size} />
    </Container>
  );
}

export default Loader;
