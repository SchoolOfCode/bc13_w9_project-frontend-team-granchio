import { useState, useContext } from "react";
import "./create-comment.css";
import { UserContext } from "../App/App.js";
import Button from "../Button/Button";

function CreateComment(props) {
  const [text, setText] = useState("");
  const setIsShown = useContext(UserContext);

  function handleChange(event) {
    setText(event.target.value);
  }

  /** this posts a new comment to the db */
  async function handleClick() {
    await fetch("https://granchinooo.onrender.com/api/comments", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post_id: props.post_id,
        comment_content: text,
      }),
    }).then(() => {
      setIsShown(true);
      props.getData();
      setText("");
    });
  }

  return (
    <form className="comment-form">
      <h2 className="create-comment-title">Create a comment</h2>
      <textarea type="text" value={text} onChange={handleChange}></textarea>
      <Button
        className="comment-button"
        onClick={handleClick}
        text={"Post Comment"}
      ></Button>
    </form>
  );
}

export default CreateComment;
