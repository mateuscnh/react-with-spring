import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../Loader";

import { Container } from "./styles";

function PostDetails() {
  const { id } = useParams();
  const { data } = useFetch(`http://localhost:8080/post/${id}`);

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

      <p className="post-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dolor leo.
        Etiam pharetra mattis aliquet. Quisque at sagittis odio, nec scelerisque
        arcu. Morbi sit amet libero mauris. Etiam auctor, augue at pharetra
        consequat, massa sapien semper quam, non euismod dui velit a felis.
        Pellentesque ante nisi, facilisis ac urna a, facilisis faucibus nunc.
        Sed volutpat in eros non semper. Vivamus eros est, venenatis a pulvinar
        id, euismod eget erat. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Pellentesque in consequat
        magna. <br />
        <br />
        Donec pellentesque eu tellus eget posuere. Nam nisi sem, posuere nec
        eleifend sollicitudin, euismod ut nisl. Duis quis nisl in nulla tempor
        consequat non in odio. Mauris suscipit interdum turpis, iaculis mattis
        purus dapibus sed. Nunc sed nibh ligula. Aliquam suscipit elementum
        lectus vel fermentum. Vivamus risus elit, mattis non ante sed, eleifend
        accumsan tellus. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Etiam auctor non risus in
        semper. <br />
        <br />
        Sed at feugiat orci. Maecenas auctor ultrices justo, ut convallis nibh
        volutpat ac. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Nunc mattis semper turpis. Nam
        consequat bibendum tristique. Duis eget turpis sit amet lacus euismod
        rutrum vel ut libero. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Sed purus lectus, mollis vitae
        orci ut, viverra volutpat sem. Vivamus diam elit, vestibulum sit amet
        luctus sed, efficitur ac arcu. Fusce nunc augue, rhoncus commodo finibus
        id, rhoncus rhoncus urna. Fusce vel commodo ex. Aliquam malesuada tortor
        quis tortor posuere, vel vehicula massa tempus.
      </p>
    </Container>
  );
}

export default PostDetails;
