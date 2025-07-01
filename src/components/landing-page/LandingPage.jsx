import React from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <Container maxWidth="md" sx={{ textAlign: 'center', py: 10 }}>
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                    style={{
                        width: 80,
                        height: 80,
                        margin: '0 auto',
                        backgroundColor: '#1976d2',
                        borderRadius: '50%',
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color: '#fff',
                            lineHeight: '80px',
                            fontWeight: 'bold',
                            fontFamily: 'monospace',
                        }}>
                        DC
                    </Typography>
                </motion.div>

                <Typography variant="h4" sx={{ mt: 4, fontWeight: 600 }}>
                    Welcome to DevConnect
                </Typography>

                <Typography variant="body1" sx={{ mt: 1, mb: 4, color: 'gray' }}>
                    Bridging Developers and Users on One Platform
                </Typography>

                <TextField
                    variant="outlined"
                    placeholder="Search developers, projects..."
                    fullWidth
                    sx={{ mb: 3 }}
                />
                <Button onClick={() => navigate('/selection')} variant="contained" size="large">
                    Get Started
                </Button>
            </Container>
        </>
    );
};

export default LandingPage;
