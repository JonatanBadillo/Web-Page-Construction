import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import logo from '../../assets/logo.png';

interface NavbarProps {
  onHomeClick: () => void;
  onAboutClick: () => void;
  onOurWorkClick: () => void;
  onContactClick: () => void;
  window?: () => Window;
}

const drawerWidth = 240;

const Navbar = ({ onHomeClick, onAboutClick, onOurWorkClick, onContactClick, window }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleTitleClick = () => {
    onHomeClick(); // Llamada a onHomeClick para desplazarse al inicio
  };

  // Estilos comunes para los botones
  const buttonStyle = {
    color: '#ffd00e',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '0',
      height: '2px',
      bottom: 0,
      left: '50%',
      background: '#ffd00e',
      transition: 'all 0.3s ease',
      transform: 'translateX(-50%)',
    },
    '&:hover': {
      backgroundColor: 'transparent',
      '&::after': {
        width: '80%',
      },
    },
    mx: 1,
    textTransform: 'none',
    fontSize: '1.1rem',
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ 
      textAlign: 'center',
      height: '100%',
      background: 'linear-gradient(145deg, #000000, #1a1a1a)',
    }}>
      <img 
        src={logo} 
        alt="Logo" 
        style={{ 
          height: '70px', 
          width: '70px', 
          marginTop: '20px', 
          marginBottom: '10px',
          transition: 'transform 0.3s ease',
          cursor: 'pointer',
        }} 
        onClick={handleTitleClick} 
      />
      <Typography variant="h6" sx={{ 
        my: 2, 
        color: '#ffd00e',
        fontWeight: 'bold',
        letterSpacing: 1.5,
      }}>
        Sam Alexander Construction Inc.
      </Typography>
      <Divider sx={{ 
        backgroundColor: '#ffd00e',
        opacity: 0.3,
        margin: '0 20px',
      }} />
      <List>
        {['Home', 'About Us', 'Our Projects', 'Contact Us'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={[onHomeClick, onAboutClick, onOurWorkClick, onContactClick][index]}
              sx={{
                textAlign: 'center',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 208, 14, 0.1)',
                },
              }}
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', marginBottom: 0 }}>
      <CssBaseline />
      <AppBar component="nav" sx={{   
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(255, 208, 14, 0.1)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      }}>
        <Toolbar sx={{ height: { sm: '90px' } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* Logo versión móvil */}
          <Box sx={{ 
            display: { xs: 'flex', sm: 'none' }, 
            alignItems: 'center',
            gap: 1,
          }}>
            <img 
              src={logo} 
              alt="Logo" 
              style={{ 
                height: '45px', 
                width: '45px',
                transition: 'transform 0.3s ease',
              }} 
            />
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: '#ffd00e',
                fontWeight: 600,
                letterSpacing: 1,
              }}
            >
              Sam Alexander Construction Inc.
            </Typography>
          </Box>

          {/* Logo versión desktop */}
          <Box 
            component="img"
            src={logo}
            alt="Company Logo"
            sx={{
              height: 70,
              width: 70,
              mr: 2,
              display: { xs: 'none', sm: 'block' },
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
              cursor: 'pointer',
            }}
            onClick={handleTitleClick}
          />

          <Typography
            variant="h5"
            component="div"
            onClick={handleTitleClick}
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              color: '#ffd00e',
              fontWeight: 'bold',
              letterSpacing: 2,
              cursor: 'pointer',
              transition: 'opacity 0.3s ease',
              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
            Sam Alexander Construction Inc.
          </Typography>

          {/* Botones de Navegación */}
          <Box sx={{ 
            display: { xs: 'none', sm: 'flex' },
            gap: 2,
          }}>
            {['Home', 'About Us', 'Our Projects', 'Contact Us'].map((text, index) => (
              <Button 
                key={text}
                onClick={[onHomeClick, onAboutClick, onOurWorkClick, onContactClick][index]}
                sx={buttonStyle}
              >
                {text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#000',
              background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)',
              color: '#ffd00e',
              transition: 'transform 0.3s ease',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;
