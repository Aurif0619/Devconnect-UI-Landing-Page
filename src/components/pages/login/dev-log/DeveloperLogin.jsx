import React, { useState } from 'react';
import {
  Box, Button, Container, TextField, Typography,
  Paper, IconButton, InputAdornment, Alert, Snackbar
} from '@mui/material';
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

    // Successful login
    setLoginSuccess(true);
    // Redirect handled after snackbar closes
  };

  const handleSnackbarClose = () => {
    setLoginSuccess(false);
    navigate('/dashboard');
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Developer Login
        </Typography>

        <Box component="form" onSubmit={handleLogin} sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            margin="normal"
            error={!!error && error.includes('email')}
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={form.password}
            onChange={handleChange}
            margin="normal"
            error={!!error && error.includes('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 3, py: 1.5 }}
          >
            Login
          </Button>

          <Box textAlign="center" mt={2}>
            <Button
              onClick={() => navigate('/signup/dev')}
              sx={{ textTransform: 'none' }}
            >
              Don't have an account? Sign Up
            </Button>
          </Box>
        </Box>
      </Paper>

      <Snackbar
        open={loginSuccess}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          Login successful! Redirecting to dashboard...
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default DeveloperLogin;