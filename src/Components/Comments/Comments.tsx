
import './Comments.css';

interface Comment {
  name: string;
  text: string;
  date: string;
}

const Comments = () => {
  // Cambia aquí para agregar comentarios manualmente
  const comments: Comment[] = [
    { name: 'Alice', text: 'Great service and very friendly staff!', date: '2024-10-19 12:00 PM' },
    { name: 'Bob', text: 'Highly recommend! The experience was fantastic.', date: '2024-10-18 10:30 AM' },
    { name: 'Charlie', text: 'Good value for money. Will come back again.', date: '2024-10-17 08:45 AM' },
    { name: 'Diana', text: 'Had an amazing time, thank you!', date: '2024-10-16 09:15 AM' },
  ];

  return (
    <div className="comments-section">
      <h2>Opinions</h2>
      <div className="comments-list">
        {comments.map((comment, index) => (
          <div className="comment-card" key={index}>
            <h3 className="comment-name">{comment.name}</h3>
            <p className="comment-text">{comment.text}</p>
            <small className="comment-date">{comment.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
