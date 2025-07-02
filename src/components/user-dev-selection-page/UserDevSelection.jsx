import React from 'react';
import {
  Box, Typography, Card, CardActionArea,
  CardContent, Grid, Container, styled
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[8],
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
  textAlign: 'center',
}));

const UserDevSelection = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box>
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Typography variant="h4" align="center" gutterBottom
            sx={{ mb: 6, fontWeight: 'bold' }} >
            Join DevConnect As   </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={6}>
              <StyledCard onClick={() => navigate('/signup/dev')}>
                <CardActionArea sx={{ height: '100%' }}>
                  <StyledCardContent>
                    <Box sx={{
                      width: 80,
                      height: 80, bgcolor: 'primary.main',
                      borderRadius: '50%', display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                      mb: 3
                    }}>
                      <CodeIcon sx={{ fontSize: 40, color: 'common.white' }} />
                    </Box>
                    <Typography gutterBottom variant="h5" component="div">
                      I'm a Developer
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Find exciting projects, showcase your skills, and grow your career.
                    </Typography>
                  </StyledCardContent>
                </CardActionArea>
              </StyledCard>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <StyledCard onClick={() => navigate('/signup/user')}>
                <CardActionArea sx={{ height: '100%' }}>
                  <StyledCardContent>
                    <Box sx={{
                      width: 80, height: 80,
                      bgcolor: 'secondary.main',
                      borderRadius: '50%', display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                      mb: 3
                    }}>
                      <PersonIcon sx={{ fontSize: 40, color: 'common.white' }} />
                    </Box>
                    <Typography gutterBottom variant="h5" component="div">
                      I'm a User
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Find talented developers for your projects and collaborate seamlessly.
                    </Typography>
                  </StyledCardContent>
                </CardActionArea>
              </StyledCard>
            </Grid>
          </Grid>
        </Container >
      </Box>
    </>
  );
};

export default UserDevSelection;