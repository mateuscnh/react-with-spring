import { Image } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

function Post({ data, tour }) {
  const { id, title, description, img_url } = data;

  return (
    <Container>
      <div className="post-img">
        <img
          src={
            img_url ??
            "https://spassodourado.com.br/wp-content/uploads/2015/01/default-placeholder.png"
          }
          alt={title}
          data-tour={tour}
        />
      </div>

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
