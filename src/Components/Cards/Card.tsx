import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea } from '@mui/material';

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText: string;
}

const CustomCard: React.FC<CardProps> = ({ imageSrc, imageAlt, title, description}) => {
  return (
    <Card sx={{ maxWidth: '60vh' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={imageSrc}
          alt={imageAlt}
          
        />
        <br></br>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}

export default CustomCard;
