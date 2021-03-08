import React, { forwardRef, useContext, useState } from "react";

import { Modal, Input } from "antd";

import { Container } from "./styles";
import api from "../../services/api";
import { MainContext } from "../../contexts/MainContext";

const { TextArea } = Input;

function NewPost({ mutate, data, isModalVisible, toggleModal }, ref) {
  const { posts } = useContext(MainContext);
  const [title, setTitle] = useState("");
  const [img_url, setImgUrl] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      title,
      img_url,
      description,
      content,
    };

    api
      .post("/posts", newData)
      .then((res) => mutate([...posts, res.data], false));

    toggleModal();
  };

  return (
    <Modal
      title="Novo Post"
      visible={isModalVisible}
      onOk={handleSubmit}
      onCancel={toggleModal}
    >
      <Container>
        <label htmlFor="title">Título</label>
        <Input
          id="title"
          placeholder="Título"
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="img">Imagem (URL)</label>
        <Input
          id="img"
          placeholder="Imagem (URL)"
          onChange={(e) => setImgUrl(e.target.value)}
        />

        <label htmlFor="description">Resumo</label>
        <TextArea
          id="description"
          placeholder="Resumo"
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="content">Texto</label>
        <TextArea
          id="content"
          placeholder="Conteúdo"
          onChange={(e) => setContent(e.target.value)}
        />
      </Container>
    </Modal>
  );
}

export default forwardRef(NewPost);
