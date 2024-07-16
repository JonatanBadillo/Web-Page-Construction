import React, { useState } from 'react';
import './Comments.css';

const Comments = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(event.target.value);
  };

  const handlePostComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="comments-section">
      <h2>Comments</h2>
      <textarea
        placeholder="Write a comment..."
        value={newComment}
        onChange={handleInputChange}
      ></textarea>
      <button onClick={handlePostComment}>POST COMMENT</button>
      <div className="comments-list">
        {comments.map((comment, index) => (
          <div className="comment" key={index}>
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
