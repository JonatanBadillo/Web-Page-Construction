import './Comments.css';
import { FaStar } from 'react-icons/fa';

interface Comment {
  text: string;
  name: string; // Agregar el nombre
  date: string;
}

const Comments = () => {
  const comments: Comment[] = [
    { text: "El equipo de construcción fue muy profesional y cumplió con todos los plazos.", name: "Ana Pérez", date: "2024-10-01 10:30" },
    { text: "Quedé muy satisfecho con la remodelación de mi casa. ¡Altamente recomendados!", name: "Carlos López", date: "2024-10-02 14:15" },
    { text: "La calidad de los materiales utilizados es excepcional.", name: "María Fernández", date: "2024-10-03 09:45" },
    { text: "Gran atención al cliente, se aseguraron de que estuviera satisfecho con el progreso.", name: "Pedro Sánchez", date: "2024-10-04 16:00" },
    { text: "Recomiendo esta empresa a todos mis amigos que necesiten trabajos de construcción.", name: "Luisa Morales", date: "2024-10-05 18:20" },
    { text: "Su compromiso con la calidad es evidente en cada proyecto.", name: "Juan Rodríguez", date: "2024-10-06 12:00" },
    { text: "La remodelación de mi oficina fue un éxito total, ¡gracias por el excelente trabajo!", name: "Isabel Torres", date: "2024-10-07 15:45" },
    { text: "Me encanta cómo transformaron mi jardín en un espacio hermoso y funcional.", name: "Fernando Ruiz", date: "2024-10-08 17:30" },
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
