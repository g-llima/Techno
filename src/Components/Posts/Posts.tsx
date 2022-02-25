import { RootStateOrAny, useSelector } from "react-redux";

import Post from "./Post/Post";
import "./CSS/Posts.css";

function Posts() {
  const posts = useSelector((state: RootStateOrAny) => state.posts);

  console.log(posts);

  const postsArray = [
    {
      imgLink:
        "https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA",
      title: "Two seats were vacant",
      tags: ["#reverse", "#charismatic"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      imgLink:
        "https://i.kym-cdn.com/entries/icons/original/000/026/152/gigachad.jpg",
      title: "Ultra-masculine male",
      tags: ["#gigachad", "#man", "#culture"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="posts">
      {postsArray.map((item, index) => (
        <Post
          key={index}
          imgLink={item.imgLink}
          title={item.title}
          tags={item.tags}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default Posts;
