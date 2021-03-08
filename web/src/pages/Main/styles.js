import styled from "styled-components";

export const Container = styled.div`
  .posts-wrapper :nth-child(even) {
    div {
      order: 0;
    }
    .post-img {
      order: 1;
      margin: 0;
    }
  }
`;
