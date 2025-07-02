import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, Paper, IconButton, InputAdornment, Snackbar, Alert } from '@mui/material';
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
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
    navigate('/login/dev');
  };

  return (
    <>
      <Box
        sx={{
          minHeight: '100vh',
          background: `
          radial-gradient(circle at 20% 30%, rgba(100, 210, 255, 0.7) 0%, transparent 40%),
          radial-gradient(circle at 80% 70%, rgba(120, 120, 255, 0.7) 0%, transparent 40%),
          linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)
        `,
          backgroundAttachment: 'fixed',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2
        }}
      >
        <Container maxWidth="md">
          <Paper elevation={6} sx={{
            p: 4,
            borderRadius: 4,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                mb: 1
              }}
            >
              Developer Sign Up
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                color: 'text.secondary',
                mb: 4
              }} >
              Join our developer community
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: 'grid',
                gridTemplateColumns: { sm: '1fr 1fr' },
                gap: 3
              }}
            >
              <TextField fullWidth label="Full Name" name="name"
                value={form.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                sx={{ mb: 2 }}
                InputProps={{
                  style: { borderRadius: 12 }
                }}
              />

              <TextField fullWidth label="Email" name="email" type="email"
                value={form.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                sx={{ mb: 2 }}
                InputProps={{
                  style: { borderRadius: 12 }
                }}
              />

              <TextField fullWidth label="Password" name="password"
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
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

              <TextField
                fullWidth
                label="Tech Stack (comma separated)"
                name="techStack"
                value={form.techStack}
                onChange={handleChange}
                error={!!errors.techStack}
                helperText={errors.techStack}
                sx={{ mb: 2 }}
                placeholder="e.g., React, Node.js, MongoDB"
                InputProps={{
                  style: { borderRadius: 12 }
                }}
              />

              <TextField
                fullWidth
                label="LinkedIn URL"
                name="linkedin"
                value={form.linkedin}
                onChange={handleChange}
                error={!!errors.linkedin}
                helperText={errors.linkedin}
                sx={{ mb: 2 }}
                placeholder="https://linkedin.com/in/yourprofile"
                InputProps={{
                  style: { borderRadius: 12 }
                }}
              />

              <TextField fullWidth label="GitHub URL"
                name="github"
                value={form.github}
                onChange={handleChange}
                error={!!errors.github}
                helperText={errors.github}
                sx={{ mb: 2 }}
                placeholder="https://github.com/yourusername"
                InputProps={{
                  style: { borderRadius: 12 }
                }}
              />

              <Box sx={{ gridColumn: '1 / -1' }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 2, py: 1.5,
                    borderRadius: 12,
                    fontWeight: 600,
                    background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(106, 17, 203, 0.4)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Sign Up
                </Button>
              </Box>

              <Box textAlign="center" sx={{ gridColumn: '1 / -1', mt: 2 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Already have an account?{' '}
                  <Button
                    onClick={() => navigate('/login/dev')}
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
                    Login here
                  </Button>
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Container>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity="success"
            sx={{ width: '100%' }}
          >
            Signup successful! Redirecting to login...
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default DeveloperSignup;