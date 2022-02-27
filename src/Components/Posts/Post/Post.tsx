import "./CSS/post.css";

interface propsInterface {
  imgLink: string;
  title: string;
  author: string;
  date: string;
  tag: string;
}

function Post({ imgLink, title, author, date, tag }: propsInterface) {
  return (
    <div className="post">
      <div className="post__img_wrapper">
        <img src={imgLink} alt={title} />
      </div>
      <div className="post__content">
        <div className="post__content__header">
          <span>{tag.toUpperCase()}</span>
          {date}
        </div>

        <h2 className="post__content__title">{title}</h2>

        <div className="post__content__footer">
          <p>
            by <span>{author}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
