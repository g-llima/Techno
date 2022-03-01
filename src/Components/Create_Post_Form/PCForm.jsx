import { useState } from "react";
import { useDispatch } from "react-redux";

import { createPost } from "../../Actions/actions.js";
import "./CSS/PCForm.css";

function PCForm() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    description: "",
    tag: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(formData));
  };
  const clear = () => {
    setFormData({
      author: "",
      title: "",
      description: "",
      tag: "",
      selectedFile: "",
    });
    document.getElementById("PCForm").reset();
  };

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
    <form onSubmit={handleSubmit} method="POST" className="PCForm" id="PCForm">
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
          maxLength="21"
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
          name="tag"
          placeholder="Tag"
          value={formData.tag}
          onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
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
