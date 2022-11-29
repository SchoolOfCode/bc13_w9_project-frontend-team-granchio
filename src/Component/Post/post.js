import { useState } from "react";
import Comment from "../Comment/comment";
import CreateComment from "../Create-Comment/create-comment";
import "./post.css";

function Post(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="container-post">
      <div className="post">
        <button
          className="post-title-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="post-author-container">
            <h5 className="post-author">{props.post.duck_name}: </h5>
          </div>
          {props.post_title}
        </button>
      </div>
      {isExpanded && (
        <div className="post-comment-parent-container">
          <p className="post-content">{props.content}</p>
          <CommentList comments={props.post.comments} />
          <CreateComment
            rerender={props.rerender}
            setRerender={props.setRerender}
            setPosts={props.setPosts}
            posts={props.posts}
            post_id={props.post.post_id}
          />
        </div>
      )}
    </div>
  );
}

function CommentList({ comments }) {
  return (
    <div style={{ marginLeft: "32px" }}>
      {comments.map((currentComment) => (
        <Comment currentComment={currentComment} />
      ))}
    </div>
  );
}

export default Post;
