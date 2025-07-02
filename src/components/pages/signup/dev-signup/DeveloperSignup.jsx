import React, { useState } from 'react';
import {
  Box, Button, Container, TextField, Typography,
  Paper, IconButton, InputAdornment, Snackbar, Alert
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
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  // Validation rules
  const fieldValidations = {
    name: value => !value ? 'Name is required' : '',
    email: value => !value.includes('@') ? 'Invalid email' : '',
    password: value => value.length < 6 ? 'Min 6 characters' : '',
    techStack: value => !value ? 'Tech Stack required' : '',
    linkedin: value => !value.startsWith('http') ? 'Valid LinkedIn URL required' : '',
    github: value => !value.startsWith('http') ? 'Valid GitHub URL required' : ''
  };

  const validateForm = () => {
    const newErrors = {};
    Object.entries(form).forEach(([field, value]) => {
      const error = fieldValidations[field](value);
      if (error) newErrors[field] = error;
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    localStorage.setItem('developerData', JSON.stringify(form));
    setOpenSnackbar(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
    navigate('/login/dev');
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Developer Sign Up
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={form.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
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

          <TextField
            fullWidth
            label="Tech Stack (comma separated)"
            name="techStack"
            value={form.techStack}
            onChange={handleChange}
            error={!!errors.techStack}
            helperText={errors.techStack}
            margin="normal"
            placeholder="e.g., React, Node.js, MongoDB"
          />

          <TextField
            fullWidth
            label="LinkedIn URL"
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
            error={!!errors.linkedin}
            helperText={errors.linkedin}
            margin="normal"
            placeholder="https://linkedin.com/in/yourprofile"
          />

          <TextField
            fullWidth
            label="GitHub URL"
            name="github"
            value={form.github}
            onChange={handleChange}
            error={!!errors.github}
            helperText={errors.github}
            margin="normal"
            placeholder="https://github.com/yourusername"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, py: 1.5 }}
          >
            Sign Up
          </Button>

          <Box textAlign="center" mt={2}>
            <Button
              onClick={() => navigate('/login/dev')}
              sx={{ textTransform: 'none' }}
            >
              Already have an account? Login
            </Button>
          </Box>
        </Box>
      </Paper>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          Signup successful! Redirecting to login...
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default DeveloperSignup;