import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, Paper, Alert, Snackbar } from '@mui/material';

import { useNavigate, useLocation } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const isUser = location.pathname.includes('/user');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setError('Email is required');
            return;
        }

        if (!email.includes('@')) {
            setError('Please enter a valid email');
            return;
        }

        console.log(`Password reset requested for ${isUser ? 'user' : 'developer'}:`, email);
        setOpenSnackbar(true);
        setEmail('');
        setError('');
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
        navigate(isUser ? '/login/user' : '/login/dev');
    };

    return (
        <>
            <Box
                sx={{
                    minHeight: '100vh',
                    background: `
           radial-gradient(circle at 10% 20%, rgba(100, 210, 255, 0.7) 0%, transparent 40%),
           radial-gradient(circle at 90% 80%, rgba(120, 120, 255, 0.7) 0%, transparent 40%),
           linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)
        `,
                    backgroundAttachment: 'fixed',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2
                }}
            >
                <Container maxWidth="sm">
                    <Paper elevation={6} sx={{
                        p: 4,
                        borderRadius: 4,
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(8px)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
                        <Typography
                            variant="h3" align="center"
                            gutterBottom
                            sx={{
                                fontWeight: 700,
                                color: 'primary.main', mb: 1
                            }}
                        >
                            Forgot Password
                        </Typography>
                        <Typography
                            variant="body1" align="center"
                            sx={{
                                color: 'text.secondary',
                                mb: 4
                            }}
                        >
                            {`Enter your ${isUser ? 'user' : 'developer'} email to receive a password reset link`}
                        </Typography>

                        <Box component="form" onSubmit={handleSubmit}>
                            <TextField fullWidth
                                label="Email Address"
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setError('');
                                }}
                                error={!!error} helperText={error}
                                margin="normal"
                                sx={{ mb: 3 }}
                                InputProps={{
                                    style: { borderRadius: 12 }
                                }}
                            />

                            <Button
                                type="submit"
                                fullWidth variant="contained"
                                size="large"
                                sx={{
                                    py: 1.5,
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
                                Send Reset Link
                            </Button>

                            <Box textAlign="center" mt={3}>
                                <Button
                                    onClick={() => navigate(isUser ? '/login/user' : '/login/dev')}
                                    sx={{
                                        textTransform: 'none',
                                        color: 'primary.main',
                                        fontWeight: 600,
                                        '&:hover': {
                                            textDecoration: 'underline'
                                        }
                                    }}
                                >
                                    Back to {isUser ? 'User Login' : 'Developer Login'}
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                </Container>

                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={4000}
                    onClose={handleSnackbarClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Alert
                        onClose={handleSnackbarClose}
                        severity="success"
                        sx={{ width: '100%' }}>
                        Password reset link sent to your email!
                    </Alert>
                </Snackbar>
            </Box>
        </>
    );
};

export default ForgotPassword;