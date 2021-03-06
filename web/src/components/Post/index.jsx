import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

function Post({ data }) {
  const { id, title, description, img_url, data_tour } = data;

  return (
    <Container>
      <img src={img_url} alt={title} data-tour={data_tour} />

      <div>
        <Link to={`/details/${id}`}>
          <h1>{title}</h1>
        </Link>
        <p>{description} </p>
      </div>
    </Container>
  );
}

export default Post;
