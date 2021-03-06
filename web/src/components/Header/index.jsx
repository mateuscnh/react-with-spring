import React, { useCallback, useRef } from "react";

import TourGuide from "../TourGuide";

import { Container } from "./styles";

function Header() {
  const tourGuideRef = useRef(null);

  const handleOpenTour = useCallback(() => {
    tourGuideRef.current.openTour();
  }, []);

  return (
    <Container>
      <TourGuide ref={tourGuideRef} />
      <h1>Guia turístico com Reactour</h1>
      <button onClick={handleOpenTour}>Turistar</button>
    </Container>
  );
}

export default Header;
