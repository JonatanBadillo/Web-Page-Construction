import React, { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState("");

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="comments-section">
      <h2>Comments</h2>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Write a comment..."
      ></textarea>
      <button onClick={handleCommentSubmit}>Post Comment</button>
      <div className="comments-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
