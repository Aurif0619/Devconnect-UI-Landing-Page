import React, { useState } from 'react';
import {
  Container, Paper, Typography, TextField,
  Button, Box, IconButton, InputAdornment,
  Alert, Snackbar
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('userData'));

    if (!storedUser) {
      setError('No account found. Please sign up first.');
      return;
    }

    if (form.email === storedUser.email && form.password === storedUser.password) {
      setOpenSnackbar(true);
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    } else {
      setError('Invalid email or password');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Box sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        py: 0
      }}>
        <Container maxWidth="sm">
          <Paper elevation={6} sx={{
            p: 4,
            borderRadius: 4,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <Box textAlign="center" mb={3}>
              <Typography variant="h3" sx={{
                fontWeight: 700,
                color: 'primary.main',
                mb: 1
              }}>
                Welcome Back
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Sign in to access your dashboard
              </Typography>
            </Box>

            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit}>
              <TextField fullWidth label="Email Address"
                name="email" type="email"
                value={form.email}
                onChange={handleChange}
                margin="normal"
                sx={{ mb: 2 }}
                InputProps={{
                  style: { borderRadius: 12 }
                }}
              />

              <TextField fullWidth label="Password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={handleChange}
                margin="normal"
                InputProps={{
                  style: { borderRadius: 12 },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                sx={{ mb: 3 }}
              />

              <Button
                type="submit"
                fullWidth variant="contained"
                size="large" sx={{
                  mt: 2, py: 1.5,
                  borderRadius: 12,
                  fontWeight: 600,
                  fontSize: '1rem',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Login
              </Button>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1 }}>
                <Button
                  onClick={() => navigate('/forgot-password')}
                  sx={{
                    textTransform: 'none',
                    color: 'primary.main',
                    fontWeight: 600,
                    p: 0,
                    fontSize: '0.875rem',
                    '&:hover': {
                      textDecoration: 'underline',
                      background: 'none'
                    }
                  }}
                >
                  Forgot Password?
                </Button>
              </Box>

              <Box textAlign="center" mt={3}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Don't have an account?{' '}
                  <Button
                    onClick={() => navigate('/signup/user')}
                    sx={{
                      textTransform: 'none',
                      color: 'primary.main',
                      fontWeight: 600,
                      p: 0,
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    Sign up here
                  </Button>
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Container>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: '100%' }}>
            Login successful! Redirecting to dashboard...
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default UserLogin;