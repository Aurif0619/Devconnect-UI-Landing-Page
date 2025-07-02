import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Box, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const UserSignup = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        if (!form.name) newErrors.name = 'Name is required';
        if (!form.email.includes('@')) newErrors.email = 'Invalid email';
        if (form.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        localStorage.setItem('userData', JSON.stringify(form));
        alert('Signup successful!');
        navigate('/dashboard');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    return (
        <>
            <Container maxWidth="sm">
                <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                    <Typography variant="h4" align="center" gutterBottom>
                        User Sign Up
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                        <TextField fullWidth label="Full Name"
                            name="name" type="name"
                            value={form.name} onChange={handleChange}
                            margin="normal"
                        />
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
                            <Button onClick={() => navigate('/login/user')}
                                sx={{ textTransform: 'none' }}
                            >
                               Already have an account? Login
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </>
    );
};

export default UserSignup;