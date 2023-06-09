import React from "react";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyle from "./style.js";

import { Container } from "@material-ui/core";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyle();
  console.log(posts);
  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
