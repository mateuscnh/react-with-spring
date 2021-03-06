import React from "react";
import { useFetch } from "../../hooks/useFetch";
import Header from "../Header";
import Loader from "../Loader";
import Post from "../Post";

import { Container } from "./styles";

function Main() {
  const { data } = useFetch("http://localhost:8080/posts");

  return (
    <Container>
      <Header />

      {data ? (
        <div className="posts-wrapper">
          {data.map((post) => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </Container>
  );
}

export default Main;
