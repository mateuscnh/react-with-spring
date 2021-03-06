import styled from "styled-components";

export const Container = styled.div`
  padding: 72px 2%;
  text-align: center;

  header {
    margin: 0 auto;
    max-width: 420px;
    width: 100%;
    margin-bottom: 40px;

    .back-to-home {
      position: absolute;
      top: 40px;
      left: 40px;
      text-decoration: none;

      color: #2a004f;
    }
  }

  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    margin-bottom: 24px;

    border-radius: 100%;
  }

  p {
    line-height: 140%;
  }

  .header-description {
    h1 {
      margin-bottom: 12px;
    }

    p {
      font-size: 0.9rem;
      margin-bottom: 24px;
      opacity: 0.8;
    }
  }

  .post-content {
    text-align: left;
    max-width: 640px;
    width: 100%;
    margin: 0 auto;
  }
`;
