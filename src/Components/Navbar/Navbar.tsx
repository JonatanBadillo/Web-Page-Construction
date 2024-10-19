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
import { keyframes } from '@mui/system';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'About Us', 'Our Work', 'Contact Us','Opinions'];

// Definimos un keyframe para la animación de elevación
const elevateAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Sam Alexander Construction Inc.
      </Typography>
      <Divider sx={{ backgroundColor: '#ffd00e' }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton 
              sx={{ 
                textAlign: 'center', 
                transition: 'background-color 0.3s, transform 0.3s', 
                '&:hover': {
                  backgroundColor: 'rgba(255, 208, 14, 0.2)', // Color de fondo en hover
                  animation: `${elevateAnimation} 0.5s ease` // Animación al hacer hover
                }
              }}
            >
              <ListItemText primary={item} />
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
          <Typography
            variant="h6"
            component="div"
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', sm: 'block' }, 
              color: '#ffd00e', 
              fontWeight: 'bold', 
              letterSpacing: 2,
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)', // Efecto de zoom al pasar el mouse
              }
            }}
          >
            Sam Alexander Construction Inc.
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button 
                key={item} 
                sx={{ 
                  color: '#ffd00e', 
                  transition: 'color 0.3s, transform 0.3s',
                  '&:hover': {
                    color: '#fff', // Cambiar color al pasar el mouse
                    transform: 'scale(1.1)', // Efecto de zoom
                    transition: 'transform 0.3s', // Transición suave
                  } 
                }}
              >
                {item}
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
              transition: 'transform 0.3s ease', // Transición suave para el Drawer
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
