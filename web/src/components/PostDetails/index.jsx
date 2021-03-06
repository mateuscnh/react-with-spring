import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../Loader";

import { Container } from "./styles";

function PostDetails() {
  const { id } = useParams();
  const { data } = useFetch(`/post/${id}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) {
    return <Loader />;
  }

  return (
    <Container>
      <header>
        <Link to="/" className="back-to-home">
          &lt; -- Voltar
        </Link>

        <img src={data.img_url} alt="" />

        <div className="header-description">
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </div>
      </header>

      <span />

      <p className="post-content">{data.content}</p>
    </Container>
  );
}

export default PostDetails;
