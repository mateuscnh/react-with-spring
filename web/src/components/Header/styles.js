import styled from "styled-components";

export const Container = styled.header`
  text-align: center;
  padding: 8px 24px;

  h1 {
    margin-top: 40px;
    font-size: 2rem;
    color: #2a004f;
  }

  button {
    display: inline-block;
    margin: 32px auto;
    padding: 14px 32px;

    border: none;
    border-radius: 4px;
    color: #fff;
    background-color: #2a004f;

    cursor: pointer;
  }

  .button-generate {
    margin: 12px;
    color: #2a004f;
    background-color: transparent;
    border: 1px solid #2a004f;
  }
`;
