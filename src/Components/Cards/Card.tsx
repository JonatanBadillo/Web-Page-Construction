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
        transition: 'transform 0.3s, box-shadow 0.3s', // Añade transición
        '&:hover': { 
          transform: 'scale(1.05)', // Escala la tarjeta al pasar el cursor
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)' // Añade sombra
        } 
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={imageSrc}
          alt={imageAlt}
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
