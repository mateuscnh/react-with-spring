import React, { useCallback, useRef } from "react";

import TourGuide from "../TourGuide";

import { Container } from "./styles";

import { posts } from "./data.json";

import api from "../../services/api";

function Header() {
  const tourGuideRef = useRef(null);
  const buttonRef = useRef(null);

  const handleOpenTour = useCallback(() => {
    tourGuideRef.current.openTour();
  }, []);

  const handleGeneratePosts = useCallback(() => {
    posts.forEach((post) => api.post("/post", post));
    buttonRef.current.style.display = "none";
  }, []);

  return (
    <Container>
      <TourGuide ref={tourGuideRef} />
      <h1>Guia turístico com Reactour</h1>
      <button onClick={handleOpenTour}>Turistar</button>

      <button
        ref={buttonRef}
        className="button-generate"
        onClick={handleGeneratePosts}
      >
        Gerar Posts
      </button>
    </Container>
  );
}

export default Header;
