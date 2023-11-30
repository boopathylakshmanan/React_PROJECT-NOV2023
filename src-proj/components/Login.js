import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState ,useEffect} from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {'Copyright © '}
      <Link color="white" to="https://github.com/boopathylakshmanan" style={{color:"white"}}>
        LAKSHMANAN
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const defaultTheme = createTheme();

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(true);
   const [typed,setType]=useState('password');
   const [showForm, setShowForm] = useState(false);
  //  const linkStyle = {
  //    marginLeft: '10px',
  //    color: 'white',
  //    textDecoration: 'none',
  //    transition: 'color 0.3s ease-in-out', // Adding transition effect
  //  };
 
  //  const linkHoverStyle = {
  //    color: '#ffcc00', // Change color on hover
  //  };
 
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
      <Container component="main" maxWidth="xs" sx={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  height: '100vh',
}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 20,

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
          <Avatar sx={{ m: 2, bgcolor: 'secondary.main' }}>
           <AccountCircleIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" style={{cursor:'pointer'}}>
                    <EmailIcon/>
                  </InputAdornment>
                ),
              }}
            />
        
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={typed}
              id="password"
              autoComplete="current-password"
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
          
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              href='http://localhost:3000/Home'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" style={{color:'white',fontFamily:'sans-serif'}}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/SignUp" variant="body2" style={{color:'white'}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4,color:'white', }} />
      </Container>
    </ThemeProvider>
  );
}
