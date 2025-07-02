import React from 'react';
import { Box, Typography, Card, CardActionArea, CardContent, Grid, Container, styled, useTheme } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345, height: '100%',
  display: 'flex', flexDirection: 'column',
  borderRadius: '16px',
  overflow: 'hidden', position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0, left: 0, right: 0,
    height: '4px',
    background: theme.palette.primary.main,
  },
  '&:nth-of-type(2)::before': {
    background: theme.palette.secondary.main,
  }
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1, display: 'flex',
  flexDirection: 'column', alignItems: 'center',
  padding: theme.spacing(4),
  textAlign: 'center',
  '&:last-child': {
    paddingBottom: theme.spacing(4)
  }
}));

const IconContainer = styled(Box)(({ theme }) => ({
  width: 80, height: 80,
  borderRadius: '50%', display: 'flex',
  alignItems: 'center', justifyContent: 'center',
  marginBottom: theme.spacing(3),
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  boxShadow: theme.shadows[4],
  '&:nth-of-type(2)': {
    background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
  }
}));

const UserDevSelection = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <>
      <Box sx={{
        minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        background: theme.palette.mode === 'dark'
          ? 'radial-gradient(circle at top, #1a1a1a 0%, #121212 100%)'
          : 'radial-gradient(circle at top, #f5f7fa 0%, #e4e8f0 100%)'
      }}>
        <Container maxWidth="md" sx={{ py: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h3" align="center"
              gutterBottom
              sx={{
                mb: 6, fontWeight: 700,
                background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}
            >
              Join DevConnect As
            </Typography>
          </motion.div>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={6}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <StyledCard onClick={() => navigate('/signup/dev')}>
                  <CardActionArea sx={{ height: '100%' }}>
                    <StyledCardContent>
                      <IconContainer>
                        <CodeIcon sx={{ fontSize: 40, color: 'common.white' }} />
                      </IconContainer>
                      <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600 }}>
                        I'm a Developer
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                        Find exciting projects, showcase your skills, and grow your career.
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'primary.main',
                          fontWeight: 500,
                          mt: 'auto'
                        }} c>
                        Get Started →
                      </Typography>
                    </StyledCardContent>
                  </CardActionArea>
                </StyledCard>
              </motion.div>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <motion.div
                variants={cardVariants}
                initial="hidden" animate="visible"
                whileHover="hover"
                transition={{ delay: 0.1 }}
              >
                <StyledCard onClick={() => navigate('/signup/user')}>
                  <CardActionArea sx={{ height: '100%' }}>
                    <StyledCardContent>
                      <IconContainer>
                        <PersonIcon sx={{ fontSize: 40, color: 'common.white' }} />
                      </IconContainer>
                      <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600 }}>
                        I'm a User
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                        Find talented developers for your projects and collaborate seamlessly.
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'secondary.main',
                          fontWeight: 500,
                          mt: 'auto'
                        }}
                      >
                        Get Started →
                      </Typography>
                    </StyledCardContent>
                  </CardActionArea>
                </StyledCard>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default UserDevSelection;