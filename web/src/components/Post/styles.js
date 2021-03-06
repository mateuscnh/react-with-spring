import styled from "styled-components";

export const Container = styled.section`
  padding: 40px;
  margin: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 4px;
    box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.1);
  }

  div {
    width: 40%;

    a {
      text-decoration: none;
    }

    h1 {
      color: #2a004f;
      margin-bottom: 24px;
    }

    p {
      color: #666;
      line-height: 140%;
    }
  }
`;
