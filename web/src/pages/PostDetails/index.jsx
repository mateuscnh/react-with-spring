import React, { useContext, useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Image } from "antd";

import { MainContext } from "../../contexts/MainContext";

import { Container } from "./styles";
import Loader from "../../components/Loader";

function PostDetails() {
  const { id } = useParams();
  const { posts } = useContext(MainContext);

  const [postDetail, setPostDetail] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    posts?.forEach((post) => post.id === Number(id) && setPostDetail(post));
  }, [posts, id]);

  if (!postDetail) {
    return <Loader size="large" />;
  }

  return (
    <Container>
      <header>
        <Link to="/" className="back-to-home">
          <FaArrowLeft /> Voltar
        </Link>

        <Image
          src={postDetail.img_url}
          alt=""
          fallback="https://spassodourado.com.br/wp-content/uploads/2015/01/default-placeholder.png"
        />

        <div className="header-description">
          <h1>{postDetail.title}</h1>
          <p>{postDetail.description}</p>
        </div>
      </header>

      <span />

      <p className="post-content">{postDetail.content}</p>
    </Container>
  );
}

export default PostDetails;
