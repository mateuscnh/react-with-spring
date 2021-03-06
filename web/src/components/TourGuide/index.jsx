import React, { forwardRef, useImperativeHandle, useState } from "react";
import Tour from "reactour";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import tourConfig from "./tourConfig";

function TourGuide(props, ref) {
  const [isTourOpen, setIsTourOpen] = useState(false);

  const accentColor = props.primaryColor;

  const openTour = () => setIsTourOpen(true);

  useImperativeHandle(ref, () => ({
    openTour,
  }));

  const closeTour = () => setIsTourOpen(false);

  return (
    <Tour
      onRequestClose={closeTour}
      isOpen={isTourOpen}
      badgeContent={(curr, tot) => `${curr} de ${tot}`}
      steps={tourConfig}
      rounded={4}
      disableInteraction={false}
      accentColor={accentColor}
      onAfterOpen={disableBodyScroll}
      onBeforeClose={enableBodyScroll}
    />
  );
}

export default forwardRef(TourGuide);
