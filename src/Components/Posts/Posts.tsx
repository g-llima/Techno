import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";

function Posts() {
  const posts = useSelector((state: RootStateOrAny) => state.posts);

  console.log(posts);

  return <div>Posts</div>;
}

export default Posts;
