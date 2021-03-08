import React, { useContext } from "react";
import Header from "../../components/Header";
import Post from "../../components/Post";

import { Container } from "./styles";
import { MainContext } from "../../contexts/MainContext";
import Loader from "../../components/Loader";

const tour = ["reactour_step_1", "reactour_step_2", "reactour_step_3"];

function Main() {
  const { posts } = useContext(MainContext);

  return (
    <Container>
      <Header />

      {posts ? (
        <div className="posts-wrapper">
          {posts.map((post, index) => (
            <Post key={post.id} data={post} tour={tour[index]} />
          ))}
        </div>
      ) : (
        <Loader size="large" />
      )}
    </Container>
  );
}

export default Main;
