
import './Comments.css';
import { FaStar } from 'react-icons/fa';

interface Comment {
  text: string;
  name: string; // Agregar el nombre
  date: string;
}

const Comments = () => {
  const comments: Comment[] = [
    { text: "Excelente servicio y atención al cliente.", name: "Ana Pérez", date: "2024-10-01 10:30" },
    { text: "Muy satisfecho con mi compra, volveré sin duda.", name: "Carlos López", date: "2024-10-02 14:15" },
    { text: "La calidad de los productos es excepcional.", name: "María Fernández", date: "2024-10-03 09:45" },
    { text: "Un lugar muy agradable y profesional.", name: "Pedro Sánchez", date: "2024-10-04 16:00" },
    { text: "Recomiendo este lugar a todos mis amigos.", name: "Luisa Morales", date: "2024-10-05 18:20" },
    { text: "Siempre un placer comprar aquí, nunca decepcionan.", name: "Juan Rodríguez", date: "2024-10-06 12:00" },
    { text: "Atención excepcional y productos de alta calidad.", name: "Isabel Torres", date: "2024-10-07 15:45" },
    { text: "Me encanta la variedad de productos que ofrecen.", name: "Fernando Ruiz", date: "2024-10-08 17:30" },
  ];

  return (
    <div className="comments-section">
      <h2>OPINIONS</h2>
      <div className="comments-list">
        {comments.map((comment, index) => (
          <div className="comment-card" key={index}>
            <div className="stars">
              {Array(5).fill(0).map((_, i) => (
                <FaStar key={i} className="star-icon" />
              ))}
            </div>
            <div className="comment-name">{comment.name}</div>
            <div className="comment-text">{comment.text}</div>
            <small className="comment-date">{comment.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
