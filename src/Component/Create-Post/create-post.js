import React, { useState } from "react";
import "./create-post.css";

function CreatePost(props) {
  const [contentText, setContentText] = useState("");
  const [title, setTitle] = useState("");

  function handleChange(event) {
    setContentText(event.target.value);
  }

  function handleTitle(event) {
    setTitle(event.target.value);
  }

  async function handleClick() {
    await fetch("http://localhost:3000/api/posts", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        post_title: title,
        post_content: contentText,
      }),
    }).then(() => {
      props.getData();
      setContentText("");
      setTitle("");
    });
  }

  return (
    <div className="form-container-parent">
      <form>
        <div className="title-div">
          <label htmlFor="title-input">Title</label>
          <br />
          <textarea
            className="title-input"
            placeholder="Post's Title... "
            type="text"
            value={title}
            onChange={handleTitle}
          ></textarea>
        </div>
        <div className="content-div">
          <label htmlFor="content-input">Post here </label>
          <br />
          <textarea
            className="content-input"
            placeholder="Post's Content..."
            type="text"
            value={contentText}
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
      <div className="btn-div">
        <button className="button" type="button" onClick={handleClick}>
          Submit Post
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
