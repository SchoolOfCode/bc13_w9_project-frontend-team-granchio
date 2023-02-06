import React, { useState } from "react";
import "./create-post.css";
import Button from "../Button/Button";

function CreatePost(props) {
  const [contentText, setContentText] = useState("");
  const [title, setTitle] = useState("");

  function handleChange(event) {
    setContentText(event.target.value);
  }

  function handleTitle(event) {
    setTitle(event.target.value);
  }

  /** this posts a new post, to the db */
  async function handleClick() {
    await fetch("https://granchinooo.onrender.com/api/posts", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        post_title: title,
        post_content: contentText,
      }),
    }).then(() => {
      props.onPostCreated();
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
        <div className="btn-div">
          <Button
            className="submit-post-button"
            onClick={handleClick}
            text={"Submit Post"}
          />
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
