import { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";

import { createPost } from "../../Actions/posts.js";
import "./CSS/PCForm.css";

function PCForm() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    description: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(formData));
  };
  const clear = () => {};

  const uploadImg = async (e) => {
    const base64 = await convertBase64(e.target.files[0]);
    setFormData({ ...formData, selectedFile: base64 });
  };

  function convertBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  return (
    <form onSubmit={handleSubmit} method="POST" className="PCForm">
      <fieldset>
        <legend>Criar novo post</legend>
        <input
          required
          type="text"
          name="author"
          placeholder="Autor"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
        />
        <input
          required
          type="text"
          name="title"
          placeholder="Título"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <input
          required
          type="text"
          name="description"
          placeholder="Descrição"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <input
          required
          type="text"
          name="tags"
          placeholder="Tags"
          value={formData.tags}
          onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
        />
        <button type="submit" className="createBTN">
          Criar
        </button>
        <button type="button" className="clearBTN" onClick={clear}>
          Limpar
        </button>
        <div className="fileInput">
          <input
            required
            accept=".jpg, .jpeg, .png"
            type="file"
            onChange={(e) => uploadImg(e)}
          />
        </div>
      </fieldset>
    </form>
  );
}

export default PCForm;
