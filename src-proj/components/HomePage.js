// HospitalHomePage.js

import React , { useEffect, useState } from 'react';
import { Container, Typography, Button, Grid, Paper,  Menu,
  MenuItem, } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {IconButton} from '@mui/material';
import {Toolbar} from '@mui/material';
import {AppBar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const HospitalHomePage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {

    setIsMounted(true);
  }, []);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (

       <main>
       <AppBar position="static">
       <Toolbar>
       <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="nav-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >

<MenuItem component={Link} to="/Home" onClick={handleMenuClose}>Home</MenuItem>
          <MenuItem component={Link} to="/" onClick={handleMenuClose}>Log In</MenuItem>
          <MenuItem component={Link} to="/SignUp" onClick={handleMenuClose}>Sign Up</MenuItem>
        </Menu>
      
         <Typography variant="h6" component="div" sx={{ flexGrow: 1,marginLeft:'180px' }}>
           Hospital Management System
         </Typography>
         <IconButton color="inherit">
           <InstagramIcon style={{ '&:hover': { opacity: 4 } }} />
         </IconButton>
         <IconButton color="inherit">
           <FacebookIcon />
         </IconButton>
         <IconButton color="inherit">
           <LinkedInIcon />
         </IconButton>
         <IconButton color="inherit">
           <TwitterIcon />
         </IconButton>
         <IconButton color="inherit">
           <YouTubeIcon />
         </IconButton>
         <IconButton color="inherit">
           <WhatsAppIcon />
         </IconButton>
       </Toolbar>
     </AppBar>
   
      <div sx={{ padding: 8 }}>
        <Container maxWidth="md" sx={{   border: '0.5px solid black', 
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.6)',
            overflow: 'hidden',
            backdropFilter:'blur(8px)',
            marginTop:'50px'}}>
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom  style={{ transition: isMounted ? 'all 0.5s ease-in-out' : 'none', opacity: isMounted ? 1 : 0 }}>
            Welcome to Hospital Management System
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph  style={{ transition: isMounted ? 'all 0.5s ease-in-out' : 'none', opacity: isMounted ? 1 : 0 }}>
            Manage patients, appointments, staff, and more with our system.
          </Typography>
          <div sx={{ display: 'flex', justifyContent: 'center', gap: 2 , transition: isMounted ? 'all 0.5s ease-in-out' : 'none', opacity: isMounted ? 1 : 0 }}>
            <Button variant="contained" color="primary"sx={{transition: isMounted ? 'all 0.5s ease-in-out' : 'none',
          opacity: isMounted ? 1 : 0,}}>
              Book Appointment
            </Button>
            <Button variant="outlined" color="primary"sx={{transition: isMounted ? 'all 0.5s ease-in-out' : 'none',
          opacity: isMounted ? 1 : 0,}}>
              Learn More
            </Button>
          </div>
        </Container>
      </div>
    
      <Container maxWidth="md" sx={{ padding: 4 ,transition: isMounted ? 'all 0.5s ease-in-out' : 'none',
          opacity: isMounted ? 1 : 0,
}}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ padding: 4, textAlign: 'center', color: 'text.secondary', minHeight: 200 }}>
              <Typography variant="h5" component="h3">
                Patients
              </Typography>
              <Typography component="p">
                View and manage patient records, appointments, and history.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ padding: 4, textAlign: 'center', color: 'text.secondary', minHeight: 200 }}>
              <Typography variant="h5" component="h3">
                Staff
              </Typography>
              <Typography component="p">
                Manage hospital staff, their roles, schedules, and information.
              </Typography>
            </Paper>
          </Grid>
         
        </Grid>
      </Container>
      <Footer/>
      

    </main>
  );
};

export default HospitalHomePage;
