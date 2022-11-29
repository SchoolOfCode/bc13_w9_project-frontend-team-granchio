import React, { useState, useEffect } from 'react';
import CreatePost from '../Create-Post/create-post';
import Post from '../Post/post';
import './forum.css';

function Forum({isShown}) {
  const [posts, setPosts] = useState([{ posts: '', reversePosts: '' }]);

    async function getData() {
    const response = await fetch('http://localhost:3000/api/posts');
    const data = await response.json();
    setPosts({
      posts: [...data.payload],
      reversePosts: [...data.payload].slice().reverse(),
    });
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="containerALL">
      <div className="title-forum">
        <h1 className="read">Read, Post, Comment</h1>
        <h3 className="anon">Anonymously!</h3>
      </div>
      <CreatePost
        setPosts={setPosts}
        posts={posts}
        getData={getData}
      ></CreatePost>
      <div className="posts-wrapper">
        <div className="post-container">
          <ul>
            {posts.reversePosts?.map(function (post) {
              return (
                <Post
                  post_title={post?.post_title}
                  author={post?.post_id}
                  content={post?.post_content}
                  post={post}
                  getData={getData}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <div className="fix-btn-div">
        <a href="#top">
          <button className="fix-button" type="button">
            Back to Top
          </button>
        </a>
      </div>
    </div>
  );
}

export default Forum;
