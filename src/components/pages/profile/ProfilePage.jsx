import React from 'react';
import { 
  Box, Typography, Avatar, Paper, Stack, 
  Chip, Divider, Button
} from '@mui/material';
import {  Email as EmailIcon,
  Link as LinkIcon, Code as CodeIcon,
  Edit as EditIcon
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { state } = useLocation();
  const userData = state?.userData || {};
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Stack direction="row" spacing={4} alignItems="center">
          <Avatar sx={{ 
            width: 120,  height: 120,
            fontSize: 48,
            bgcolor: 'primary.main'
          }}>
            {userData.name?.charAt(0)}
          </Avatar>
          <Box>
            <Typography variant="h4" gutterBottom>
              {userData.name}
              <Button 
                startIcon={<EditIcon />} 
                sx={{ ml: 2 }}
                onClick={() => navigate('/edit-profile')}
              >
                Edit
              </Button>
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {userData.role}
            </Typography>
            
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <Chip 
                icon={<EmailIcon />} 
                label={userData.email} 
                variant="outlined" 
              />
              <Chip 
                icon={<LinkIcon />} 
                label="LinkedIn" 
                variant="outlined"
                component="a"
                href={userData.linkedin}
                target="_blank"
                clickable
              />
              <Chip 
                icon={<CodeIcon />} 
                label="GitHub" 
                variant="outlined"
                component="a"
                href={userData.github}
                target="_blank"
                clickable
              />
            </Stack>
          </Box>
        </Stack>

        <Divider sx={{ my: 4 }} />

        <Box>
          <Typography variant="h6" gutterBottom>About</Typography>
          <Typography paragraph>{userData.bio || 'No bio available'}</Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box>
          <Typography variant="h6" gutterBottom>Skills</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {userData.skills?.map((skill, index) => (
              <Chip key={index} label={skill} color="primary" />
            ))}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ProfilePage;