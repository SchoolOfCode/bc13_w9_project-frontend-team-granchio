import React, { useState, useEffect } from "react";
import CreatePost from "../Create-Post/create-post";
import Post from "../Post/post";
import "./forum.css";
import Button from "../Button/Button";
export const REACT_APP_BACKEND_LINK = 'https://granchinooo.onrender.com'

function Forum() {
  const [posts, setPosts] = useState([]);
  const reversePosts = [...posts].reverse();
  /** this is a useEffect to ensure that getData renders */
  async function getData() {
    const response = await fetch(`${REACT_APP_BACKEND_LINK}/api/posts`);
    const data = await response.json();
    setPosts(data.payload);
  }
  useEffect(() => {
    getData();
  }, [posts]);

  return (
    <div className="container-all">
      <div className="title-forum">
        <h1 className="read">Read, Post, Comment</h1>
        <h3 className="anon">Anonymously!</h3>
      </div>
      <CreatePost
        setPosts={setPosts}
        posts={posts}
        getData={getData}
      ></CreatePost>
      <div className="post-container">
        {reversePosts.map((post) => (
          <Post
            post={post}
            onPostCreated={() => getData()}
            key={post.post_id}
          />
        ))}
      </div>
      <div className="fixed-button-div">
        <a href="#top">
          <Button className="fixed-button" text={"Back To Top"}></Button>
        </a>
      </div>
    </div>
  );
}

export default Forum;
