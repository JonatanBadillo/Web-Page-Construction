import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ReactNode } from 'react';

import { IconType } from 'react-icons';

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: ReactNode;
  buttonText: string;
  features: Array<{
    icon: IconType;
    text: string;
  }>;
}

const CustomCard: React.FC<CardProps> = ({ imageSrc, imageAlt, title, description, features }) => {
  return (
    <Card 
      sx={{ 
        maxWidth: {
          xs: '90%',
          sm: '100%',
          md: '60vh',
        }, 
        height: 'auto',
        background: 'linear-gradient(145deg, rgba(20, 20, 20, 0.95), rgba(20, 20, 20, 0.95))',
        borderRadius: '20px',
        overflow: 'hidden',
        transition: 'transform 0.3s ease-out',
        position: 'relative',
        margin: '16px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 208, 14, 0.1)',
        willChange: 'transform',
        '&:hover': { 
          transform: 'translateY(-10px)',
          boxShadow: '0 20px 40px rgba(255, 208, 14, 0.2)',
          border: '1px solid rgba(255, 208, 14, 0.5)',
          '& .card-media': {
            transform: 'scale(1.05)',
          }
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={imageSrc}
          alt={imageAlt}
          className="card-media"
          sx={{ 
            transition: 'transform 0.3s ease-out',
            filter: 'brightness(0.9)',
            willChange: 'transform',
            '&:hover': { 
              filter: 'brightness(1.1)'
            }
          }}
        />
        <CardContent 
          sx={{ 
            padding: '25px',
            background: 'linear-gradient(180deg, rgba(30, 30, 30, 0.95), rgba(20, 20, 20, 0.98))'
          }}
        >
          <Typography 
            variant="h5" 
            component="div" 
            sx={{
              color: '#ffd00e',
              fontSize: '2rem',
              fontWeight: '700',
              textShadow: '0 2px 10px rgba(255, 208, 14, 0.3)',
              letterSpacing: '1px',
              marginBottom: '15px',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-8px',
                left: '0',
                width: '60px',
                height: '3px',
                background: '#ffd00e',
                borderRadius: '2px',
                transition: 'width 0.3s ease',
              },
              '&:hover::after': {
                width: '100%',
              }
            }}
          >
            {title}
          </Typography>
          
          <div 
            style={{ 
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '1.1rem',
              lineHeight: '1.8',
              padding: '15px 0',
              borderBottom: '1px solid rgba(255, 208, 14, 0.2)',
              marginBottom: '20px',
            }}
          >
            {description}
          </div>

          <div 
            style={{ 
              display: 'flex',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              gap: '10px',
              marginTop: '20px',
              padding: '10px 0',
            }}
          >
            {features.map((item, index) => (
              <div 
                key={index}
                style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                  flex: '1 1 auto',
                  minWidth: '80px',
                  maxWidth: '120px',
                }}
              >
                <item.icon 
                  size={28} 
                  color="#ffd00e"
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(255, 208, 14, 0.3))',
                    transition: 'transform 0.3s ease',
                  }}
                />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'white',
                    marginTop: '8px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    opacity: 0.9,
                    textAlign: 'center',
                  }}
                >
                  {item.text}
                </Typography>
              </div>
            ))}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CustomCard;
