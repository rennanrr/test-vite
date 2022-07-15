import React, { useState } from "react";
import { Post, PostProps } from "./Post/Post";

function App() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  const emptyPost = { title: "", comment: "" };
  const [newPost, setNewPost] = useState<PostProps>(emptyPost);

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value)
      setNewPost({ ...newPost, title: event.target.value });
  };
  const handleChangeComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value)
      setNewPost({ ...newPost, comment: event.target.value });
  };

  const createPost = (event: React.MouseEvent) => {
    event.preventDefault();
    if (newPost.title && newPost.comment) {
      setPosts([...posts, newPost]);
      setNewPost(emptyPost);
    }
  };

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <Post title={post.title} comment={post.comment} />
      ))}
      <hr
        style={{
          borderTop: "3px solid #bbb",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      ></hr>
      <label>Title</label>
      <input onChange={handleChangeTitle}></input>
      <br />
      <label>Comment</label>
      <input onChange={handleChangeComment}></input>
      <br />
      <button
        onClick={createPost}
        disabled={!newPost.comment || !newPost.title}
      >
        Create Post
      </button>
    </div>
  );
}

export default App;
