import React from 'react';
import { Button, Container, TextField, Typography, Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
            }}
        >
            <Container maxWidth="md" sx={{ textAlign: 'center', py: 8 }}>
                {/* Animated Logo with Scale Effect */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{
                        rotate: { repeat: Infinity, duration: 8, ease: 'linear' },
                        scale: { type: 'spring', damping: 10, stiffness: 100 }
                    }}
                    style={{
                        width: 100,
                        height: 100,
                        margin: '0 auto',
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 20px rgba(25, 118, 210, 0.3)'
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            color: '#fff',
                            fontWeight: 'bold',
                            fontFamily: 'monospace',
                            textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                        }}
                    >
                        DC
                    </Typography>
                </motion.div>

                {/* Headline with Fade Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            mt: 4,
                            fontWeight: 700,
                            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            display: 'inline-block'
                        }}
                    >
                        Welcome to DevConnect
                    </Typography>
                </motion.div>

                {/* Subheading with Staggered Animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            mt: 2,
                            mb: 4,
                            color: 'text.secondary',
                            maxWidth: '600px',
                            mx: 'auto',
                            lineHeight: 1.6
                        }}
                    >
                        Bridging Developers and Users on One Platform. Find collaborators, showcase projects, and grow together.
                    </Typography>
                </motion.div>

                {/* Search with Interactive Animation */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ marginBottom: theme.spacing(4) }}
                >
                    <TextField
                        variant="outlined"
                        placeholder="Search developers, projects, skills..."
                        fullWidth
                        InputProps={{
                            sx: {
                                borderRadius: '50px',
                                backgroundColor: '#fff',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                            }
                        }}
                    />
                </motion.div>

                {/* CTA Button with Pulse Animation */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                        scale: [1, 1.03, 1],
                        boxShadow: [
                            `0 4px 8px ${theme.palette.primary.light}`,
                            `0 6px 12px ${theme.palette.primary.light}`,
                            `0 4px 8px ${theme.palette.primary.light}`
                        ]
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 2
                    }}
                >
                    <Button
                        onClick={() => navigate('/selection')}
                        variant="contained"
                        size="large"
                        sx={{
                            px: 6,
                            py: 1.5,
                            borderRadius: '50px',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            textTransform: 'none',
                            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`
                        }}
                    >
                        Get Started - It's Free
                    </Button>
                </motion.div>

                {/* Additional decorative elements */}
                <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center', gap: 4 }}>
                    {['React', 'Node.js', 'Python', 'UI/UX'].map((tech) => (
                        <motion.div
                            key={tech}
                            whileHover={{ y: -5 }}
                            style={{
                                padding: '8px 16px',
                                backgroundColor: '#fff',
                                borderRadius: '20px',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
                            }}
                        >
                            <Typography variant="body2" color="text.secondary">
                                {tech}
                            </Typography>
                        </motion.div>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default LandingPage;