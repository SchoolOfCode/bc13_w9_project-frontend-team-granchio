import { useState } from "react";
import Comment from "../Comment/comment";
import CreateComment from "../Create-Comment/create-comment";
import "./post.css";

/** This expands the posts which includes the comments */
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
          {props.post.post_title}
        </button>
      </div>
      {isExpanded && (
        <div className="post-comment-parent-container">
          <p className="post-content">{props.post.post_content}</p>
          <CommentList comments={props.post.comments} />
          <CreateComment
            getData={props.getData}
            setPosts={props.setPosts}
            duckName={props.post.comments.duck_name}
            commment={props.post.comments.comment_content}
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
      {comments.map((currentComment, i) => (
        <Comment key={i} currentComment={currentComment} />
      ))}
    </div>
  );
}

export default Post;
