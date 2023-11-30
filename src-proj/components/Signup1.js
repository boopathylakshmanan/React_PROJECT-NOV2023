import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
// import Link from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { InputAdornment } from '@mui/material';
import { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EmailIcon from '@mui/icons-material/Email';
import { useEffect } from 'react';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props} style={{color:"white"}}>
      {'Copyright © '}
      <Link color="inherit" to="https://instagram.com/boopathy_lakshmanan" style={{color:"white"}}>
      LAKSHMANAN
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const defaultTheme = createTheme();

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(true);
  const [typed,setType]=useState('password');
  const [showForm, setShowForm] = useState(false);


  const popOutForm = () => {
    setShowForm(true);
  };

  useEffect(() => {

    popOutForm();
  }, []); 

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
    if(showPassword)
    {
      setType('text');
    }
    else{
      setType('password');
    }

  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '0.5px solid black', 
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.6)',
            overflow: 'hidden',
            backdropFilter:'blur(8px)',
            transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out', 
            transform: showForm ? 'scale(1)' : 'scale(0.5)', 
            opacity: showForm ? 1 : 0, 

            
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AccountCircleIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" style={{cursor:'pointer'}}>
                        <EmailIcon/>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={typed}
                  id="password"
                  autoComplete="new-password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" style={{cursor:'pointer'}}>
                        {showPassword ? (
                          <VisibilityOffIcon onClick={handleClickShowPassword} />
                        ) : (
                          <VisibilityIcon onClick={handleClickShowPassword} />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I have read and agree all terms and conditions."
                />
              </Grid>
            </Grid>
            <Button href='http://localhost:3000/Home'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // onClick={() => setShowForm(!showForm)}
            >
              Sign Up
            </Button>
          
      
                <Link to="/" variant="body2" style={{marginLeft:'10px',color:'white', }}
>
                  Already have an account? Sign in
                </Link>
             
          </Box>
        </Box>
      
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}