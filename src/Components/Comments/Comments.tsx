import React, { useState, useEffect } from 'react';
import './Comments.css';

interface Comment {
  text: string;
  date: string;
}

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(event.target.value);
  };

  const handlePostComment = () => {
    if (newComment.trim()) {
      const comment = { text: newComment, date: new Date().toLocaleString() };
      const updatedComments = [...comments, comment];
      setComments(updatedComments);
      setNewComment('');
      localStorage.setItem('comments', JSON.stringify(updatedComments));
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
            <p>{comment.text}</p>
            <small>{comment.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
