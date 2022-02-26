import { useState } from "react";
import "./CSS/PCForm.css";
import FileBase from "react-file-base64";

function PCForm() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    description: "",
    tags: "",
  });

  const handleSubmit = () => {};
  const clear = () => {};

  return (
    <form onSubmit={handleSubmit} method="POST" className="PCForm">
      <fieldset>
        <legend>Criar novo post</legend>
        <input
          type="text"
          name="author"
          placeholder="Autor"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
        />
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <input
          type="text"
          name="description"
          placeholder="Descrição"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <input
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
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setFormData({ ...FormData, file: base64 })}
          />
        </div>
      </fieldset>
    </form>
  );
}

export default PCForm;
