import React, { useState } from "react";
import "./create-post.css";

function CreatePost(props) {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleTitle(event) {
    setTitle(event.target.value);
  }

  function handleClick() {
    fetch("http://localhost:3000/api/posts", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        post_title: title,
        post_content: text,
      }),
    }).then(() => {
      props.getData()
      setText("");
      setTitle("");
    });
  }

  return (
    <div className="form-container-parent">
      <div className="profile-container">
        <div className="profile"></div>
      </div>
      <form>
        <div className="inputs-parent-container">
          <div className="title-div">
            <label>Title</label>
            <br />
            <textarea
              placeholder="Post's Title... "
              type="text"
              value={title}
              onChange={handleTitle}
            ></textarea>
          </div>
          <div className="content-div">
            <label>Post here </label>
            <br />
            <textarea
              placeholder="Post's Content..."
              type="text"
              value={text}
              onChange={handleChange}
            ></textarea>
          </div>
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
