import { RootStateOrAny, useSelector } from "react-redux";

import Post from "./Post/Post";
import "./CSS/Posts.css";

function Posts() {
  const posts = useSelector((state: RootStateOrAny) => state.posts);
  const user = useSelector((state: RootStateOrAny) => state.user);
  console.log(user);

  console.log(posts);
  return (
    <div className="posts">
      {posts.map((item: any, index: number) => (
        <Post
          key={index}
          imgLink={item.selectedFile}
          tag={item.tag}
          title={item.title}
          author={item.author}
          date={item.createdAt.slice(0, 10).replace(/-/g, "/")}
        />
      ))}
    </div>
  );
}

export default Posts;
