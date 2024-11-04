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

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Sam Alexander Construction Inc.
      </Typography>
      <Divider sx={{ backgroundColor: '#ffd00e' }} />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={onHomeClick} sx={{ textAlign: 'center' }}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={onAboutClick} sx={{ textAlign: 'center' }}>
            <ListItemText primary="About Us" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={onOurWorkClick} sx={{ textAlign: 'center' }}>
            <ListItemText primary="Our Projects" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={onContactClick} sx={{ textAlign: 'center' }}>
            <ListItemText primary="Contact Us" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', marginBottom: 0 }}>
      <CssBaseline />
      <AppBar component="nav" sx={{   
        backgroundColor: '#000',
        background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)',
        boxShadow: 'none' // Eliminar sombra de la AppBar
      }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo de la empresa */}
          <Box 
            component="img"
            src={logo}
            alt="Company Logo"
            sx={{
              height: 90,
              width: 90,
              mr: 2,
              display: { xs: 'none', sm: 'block' },
              padding: 1,
            }}
          />

          <Typography
            variant="h6"
            component="div"
            onClick={handleTitleClick} // Desplazarse al tope al hacer clic
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              color: '#ffd00e',
              fontWeight: 'bold',
              letterSpacing: 2,
              cursor: 'pointer', // Añadir cursor pointer
            }}
          >
            Sam Alexander Construction Inc.
          </Typography>

          {/* Botones de Navegación */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button onClick={onHomeClick} sx={{ color: '#ffd00e' }}>Home</Button>
            <Button onClick={onAboutClick} sx={{ color: '#ffd00e' }}>About Us</Button>
            <Button onClick={onOurWorkClick} sx={{ color: '#ffd00e' }}>Our Projects</Button>
            <Button onClick={onContactClick} sx={{ color: '#ffd00e' }}>Contact Us</Button>
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
