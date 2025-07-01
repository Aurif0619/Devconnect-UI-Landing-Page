import React, { useState } from 'react';
import {
  Box, Button, Container, TextField, Typography, Paper, IconButton, InputAdornment
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const DeveloperLogin = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem('developerData'));

    if (!stored) {
      setError('No developer registered. Please sign up first.');
    } else if (
      form.email === stored.email &&
      form.password === stored.password
    ) {
      alert('Login successful!');
      navigate('/dashboard');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ mt: 5, p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Developer Login
        </Typography>

        <Box component="form" onSubmit={handleLogin} noValidate>
          <TextField
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={form.password}
            onChange={handleChange}
            fullWidth
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

          {error && <Typography color="error" sx={{ mt: 1 }}>{error}</Typography>}

          <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>

          <Button
            variant="text"
            fullWidth
            sx={{ mt: 1, textTransform: 'none' }}
            onClick={() => alert('Forgot password feature coming soon!')}
          >
            Forgot password?
          </Button>

          <Button
            fullWidth
            sx={{ mt: 1, textTransform: 'none' }}
            onClick={() => navigate('/signup/dev')}
          >
            Don't have an account? Sign Up
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default DeveloperLogin;