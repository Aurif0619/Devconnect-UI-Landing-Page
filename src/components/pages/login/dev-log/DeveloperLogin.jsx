import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, Paper, IconButton, InputAdornment, Alert, Snackbar } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const DeveloperLogin = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem('developerData'));

    if (!storedData) {
      setError('No developer registered. Please sign up first.');
      return;
    }

    if (form.email !== storedData.email) {
      setError('Invalid email address');
      return;
    }

    if (form.password !== storedData.password) {
      setError('Invalid password');
      return;
    }

    setLoginSuccess(true);
  };

  const handleSnackbarClose = () => {
    setLoginSuccess(false);
    navigate('/dashboard');
  };

  return (
    <>
      <Box
        sx={{
          minHeight: '100vh',
          background: `
          radial-gradient(circle at 10% 20%, rgba(91, 173, 254, 0.8) 0%, rgba(91, 173, 254, 0) 20%),
          radial-gradient(circle at 90% 80%, rgba(129, 236, 236, 0.8) 0%, rgba(129, 236, 236, 0) 20%),
          linear-gradient(135deg, #667eea 0%, #764ba2 100%)
        `,
          backgroundAttachment: 'fixed',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 0
        }}
      >
        <Container maxWidth="sm">
          <Paper elevation={6} sx={{
            p: 4, borderRadius: 4,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <Typography variant="h4"
              align="center" gutterBottom
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                mb: 2
              }}
            >
              Developer Login
            </Typography>

            <Typography
              variant="body1" align="center"
              sx={{
                color: 'text.secondary',
                mb: 3
              }}
            >
              Access your developer dashboard
            </Typography>

            <Box component="form" onSubmit={handleLogin} sx={{ mt: 2 }}>
              <TextField fullWidth label="Email Address"
                name="email" type="email"
                value={form.email}
                onChange={handleChange}
                margin="normal"
                error={!!error && error.includes('email')}
                sx={{ mb: 2 }}
                InputProps={{
                  style: { borderRadius: 12 }
                }}
              />

              <TextField fullWidth
                label="Password" name="password"
                type={showPassword ? 'text' : 'password'}
                value={form.password} onChange={handleChange}
                margin="normal"
                error={!!error && error.includes('password')}
                sx={{ mb: 2 }}
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
              />

              {error && (
                <Alert severity="error" sx={{ mt: 2, mb: 2, borderRadius: 2 }}>
                  {error}
                </Alert>
              )}

              <Button
                type="submit" fullWidth variant="contained" size="large"
                sx={{
                  mt: 2, py: 1.5,
                  borderRadius: 12, fontWeight: 600,
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
                  }} >
                  Forgot Password?
                </Button>
              </Box>
              <Box textAlign="center" mt={3}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Don't have an account?{' '}
                  <Button
                    onClick={() => navigate('/signup/dev')}
                    sx={{
                      textTransform: 'none',
                      color: 'primary.main',
                      fontWeight: 600,
                      p: 0,
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }} >
                    Sign up here
                  </Button>
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Container>

        <Snackbar
          open={loginSuccess}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <Alert
            onClose={handleSnackbarClose}
            severity="success"
            sx={{ width: '100%' }}
          >
            Login successful! Redirecting to dashboard...
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default DeveloperLogin;