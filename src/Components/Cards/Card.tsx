import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ReactNode } from 'react';

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: ReactNode;  // Cambiado de string a ReactNode
  buttonText: string;
}

const CustomCard: React.FC<CardProps> = ({ imageSrc, imageAlt, title, description }) => {
  return (
    <Card 
      sx={{ 
        maxWidth: '60vh', 
        backgroundColor: 'rgba(30, 30, 30, 0.9)', 
        borderRadius: '8px', 
        transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s', 
        border: '1px solid transparent', 
        '&:hover': { 
          transform: 'scale(1.05)', 
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)', 
          backgroundColor: 'rgba(50, 50, 50, 1)', 
          border: '1px solid rgba(255, 215, 0, 0.8)', 
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
            transition: 'opacity 0.3s', 
            '&:hover': { 
              opacity: 0.8 
            } 
          }}
        />
        <br />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="white">
            {title}
          </Typography>
          <Typography variant="body2" color="grey">
            {description}  {/* Ahora puede ser JSX */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CustomCard;
