import React, { useState } from 'react';
import {
  Box, Button, Container, TextField, Typography, Paper, IconButton, InputAdornment
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const DeveloperSignup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    techStack: '',
    linkedin: '',
    github: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email.includes('@')) newErrors.email = 'Invalid email';
    if (form.password.length < 6) newErrors.password = 'Min 6 characters';
    if (!form.techStack) newErrors.techStack = 'Tech Stack required';
    if (!form.linkedin.startsWith('http')) newErrors.linkedin = 'Valid LinkedIn URL required';
    if (!form.github.startsWith('http')) newErrors.github = 'Valid GitHub URL required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valErrors = validate();
    if (Object.keys(valErrors).length > 0) {
      setErrors(valErrors);
      return;
    }

    localStorage.setItem('developerData', JSON.stringify(form));
    alert('Signup successful!');
    navigate('/login/dev');
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error when user types
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ mt: 5, p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Developer Sign Up
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.name}
            helperText={errors.name}
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.email}
            helperText={errors.email}
          />

          <TextField
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={form.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.password}
            helperText={errors.password}
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

          <TextField
            label="Tech Stack (comma separated)"
            name="techStack"
            value={form.techStack}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.techStack}
            helperText={errors.techStack}
            placeholder="e.g., React, Node.js, MongoDB"
          />

          <TextField
            label="LinkedIn URL"
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.linkedin}
            helperText={errors.linkedin}
            placeholder="https://linkedin.com/in/yourprofile"
          />

          <TextField
            label="GitHub URL"
            name="github"
            value={form.github}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.github}
            helperText={errors.github}
            placeholder="https://github.com/yourusername"
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, py: 1.5 }}
            size="large"
          >
            Sign Up
          </Button>

          <Button
            variant="outlined"
            fullWidth
            sx={{ mt: 2, py: 1.5 }}
            disabled
            size="large"
          >
            Sign Up with Google (Coming Soon)
          </Button>

          <Box textAlign="center" mt={2}>
            <Button
              variant="text"
              onClick={() => navigate('/login/dev')}
              sx={{ textTransform: 'none' }}
            >
              Already have an account? Login
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default DeveloperSignup;