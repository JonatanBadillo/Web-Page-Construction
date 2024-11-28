import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ReactNode } from 'react';
import { FaHammer, FaClipboardList, FaCheckCircle, FaArrowRight } from 'react-icons/fa'; // Importando iconos

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: ReactNode;
  buttonText: string;
}

const CustomCard: React.FC<CardProps> = ({ imageSrc, imageAlt, title, description}) => {
  return (
    <Card 
      sx={{ 
        maxWidth: '60vh', 
        backgroundColor: 'rgba(30, 30, 30, 0.9)', 
        borderRadius: '10px', 
        overflow: 'hidden',
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
        <CardContent sx={{ padding: '20px', textAlign: 'center' }}>
          <Typography 
            gutterBottom 
            variant="h5" 
            component="div" 
            color="rgba(255, 215, 0, 0.8)"
            sx={{
              fontSize: '1.8rem', // Tamaño del título
              fontWeight: 'bold',
              textTransform: 'uppercase',
              textShadow: '2px 2px 6px rgba(0, 0, 0, 0.6)', // Sombra del texto
              letterSpacing: '1.5px', // Espaciado entre letras
              marginBottom: '10px',
            }}
          >
            {title}
          </Typography>
          
          {/* Agregar iconos junto a la descripción */}
          <div 
            style={{ 
              color: 'white', 
              fontSize: '1rem', // Tamaño de la descripción
              lineHeight: 1.6, // Espaciado entre líneas
              padding: '10px 0', 
              borderTop: '1px solid rgba(255, 215, 0, 0.3)', // Línea de separación
              borderBottom: '1px solid rgba(255, 215, 0, 0.3)', 
              textAlign: 'left', 
              textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)', // Sombra de la descripción
            }}
          >
            {description}
          </div>

          {/* Sección de iconos para hacer la carta más llamativa */}
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-around', 
              marginTop: '15px' 
            }}
          >
            {/* Iconos */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <FaHammer size={24} color="#ffd00e" />
              <Typography variant="body2" sx={{ color: 'white', marginTop: '5px' }}>Craftsmanship</Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <FaClipboardList size={24} color="#ffd00e" />
              <Typography variant="body2" sx={{ color: 'white', marginTop: '5px' }}>Timely Execution</Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <FaCheckCircle size={24} color="#ffd00e" />
              <Typography variant="body2" sx={{ color: 'white', marginTop: '5px' }}>Scalable Solutions</Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <FaArrowRight size={24} color="#ffd00e" />
              <Typography variant="body2" sx={{ color: 'white', marginTop: '5px' }}>Attention to Detail</Typography>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CustomCard;
