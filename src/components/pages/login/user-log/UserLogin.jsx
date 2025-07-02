import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Box, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('userData'));

    if (!storedUser) {
      setError('No account found. Please sign up first.');
      return;
    }

    if (form.email === storedUser.email && form.password === storedUser.password) {
      alert('Login successful!');
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  return (
    <>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            User Login
          </Typography>

          {error && (
            <Typography color="error" align="center" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField fullWidth label="Email"
              name="email" type="email"
              value={form.email} onChange={handleChange}
              margin="normal"
            />

            <TextField
              fullWidth label="Password"
              name="password" type={showPassword ? 'text' : 'password'}
              value={form.password}
              onChange={handleChange}
              margin="normal"
              InputProps={{
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

            <Button type="submit"
              fullWidth variant="contained"
              sx={{ mt: 3, py: 1.5 }} >
              Login
            </Button>

            <Box textAlign="center" mt={2}>
              <Button onClick={() => navigate('/signup/user')}
                sx={{ textTransform: 'none' }}
              >
                Don't have an account? Sign Up
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default UserLogin;