import React, { useCallback, useRef, useState } from "react";
import { Modal, Button } from "antd";
import NewPost from "../../modals/NewPost";

import TourGuide from "../TourGuide";

import { Container } from "./styles";

function Header({ mutate, data }) {
  const tourGuideRef = useRef(null);
  const newPostRef = useRef(null);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenTour = useCallback(() => {
    tourGuideRef.current.openTour();
  }, []);

  const toggleModal = useCallback(() => {
    setIsModalVisible(!isModalVisible);
  }, [isModalVisible]);

  return (
    <Container>
      <NewPost
        ref={newPostRef}
        data={data}
        mutate={mutate}
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      />

      <TourGuide ref={tourGuideRef} />
      <h1>Guia turístico com Reactour</h1>
      <Button type="primary" onClick={toggleModal}>
        Novo post
      </Button>
      <Button type="default" onClick={handleOpenTour}>
        Turistar
      </Button>
    </Container>
  );
}

export default Header;
