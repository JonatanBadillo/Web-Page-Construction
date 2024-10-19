import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText: string;
}

const CustomCard: React.FC<CardProps> = ({ imageSrc, imageAlt, title, description }) => {
  return (
    <Card 
      sx={{ 
        maxWidth: '60vh', 
        backgroundColor: 'rgba(30, 30, 30, 0.9)', 
        borderRadius: '8px', 
        transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s', // Transiciones
        border: '1px solid transparent', // Borde inicial transparente
        '&:hover': { 
          transform: 'scale(1.05)', 
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)', 
          backgroundColor: 'rgba(50, 50, 50, 1)', // Cambia el color de fondo al pasar el cursor
          border: '1px solid rgba(255, 215, 0, 0.8)', // Agrega un borde dorado al pasar el cursor
        } 
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={imageSrc}
          alt={imageAlt}
          sx={{ 
            transition: 'opacity 0.3s', // Transición de opacidad
            '&:hover': { 
              opacity: 0.8 // Cambia la opacidad de la imagen al pasar el cursor
            } 
          }}
        />
        <br />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="white">
            {title}
          </Typography>
          <Typography variant="body2" color="grey">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CustomCard;
