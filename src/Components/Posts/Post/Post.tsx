import "./CSS/post.css";

interface propsInterface {
  imgLink: string;
  title: string;
  tags?: string[];
  description: string;
}

function Post({ imgLink, title, tags, description }: propsInterface) {
  return (
    <div className="post">
      <div className="img_wrapper">
        <img src={imgLink} alt={title} />
      </div>
      <div className="content">
        <ul className="tags">
          {tags?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2 className="title">{title}</h2>

        <p className="description">{description}</p>

        <div className="buttons">
          <button>
            <i className="fas fa-thumbs-up"></i>
            <p>LIKE 9</p>
          </button>

          <button>
            <i className="fas fa-trash"></i>
            <p>DELETE</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
