import React, { useState } from 'react';
import {
    Box, Typography, Avatar, Paper, Stack,
    Divider, Button, TextField, Grid, IconButton,
    Chip
} from '@mui/material';
import {
    Email as EmailIcon,
    Link as LinkIcon,
    Code as CodeIcon,
    ArrowBack as BackIcon,
    Save as SaveIcon
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

const EditProfile = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [userData, setUserData] = useState(state?.userData || {
        name: "",
        email: "",
        role: "",
        linkedin: "",
        github: "",
        skills: [],
        bio: ""
    });
    const [newSkill, setNewSkill] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddSkill = () => {
        if (newSkill.trim() && !userData.skills.includes(newSkill.trim())) {
            setUserData(prev => ({
                ...prev,
                skills: [...prev.skills, newSkill.trim()]
            }));
            setNewSkill("");
        }
    };

    const handleRemoveSkill = (skillToRemove) => {
        setUserData(prev => ({
            ...prev,
            skills: prev.skills.filter(skill => skill !== skillToRemove)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically save to backend or state management
        // For now, we'll just navigate back to profile with updated data
        navigate('/profile', { state: { userData } });
    };

    return (
        <Box sx={{ p: 4 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
                    <IconButton onClick={() => navigate(-1)}>
                        <BackIcon />
                    </IconButton>
                    <Typography variant="h4">Edit Profile</Typography>
                </Stack>

                <form onSubmit={handleSubmit}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <Stack alignItems="center" spacing={2}>
                                <Avatar sx={{ width: 120,
                                    height: 120, fontSize: 48,
                                    bgcolor: 'primary.main'
                                }}>
                                    {userData.name?.charAt(0) || "U"}
                                </Avatar>
                                <Button variant="outlined" color="primary">
                                    Change Photo
                                </Button>
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={8}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth
                                        label="Full Name"
                                        name="name" value={userData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Role/Position"
                                        name="role"
                                        value={userData.role}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth
                                        label="Email" name="email"
                                        type="email" value={userData.email}
                                        onChange={handleInputChange}
                                        required
                                        InputProps={{
                                            startAdornment: <EmailIcon sx={{ mr: 1, color: 'action.active' }} />
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="LinkedIn URL"
                                        name="linkedin"
                                        value={userData.linkedin}
                                        onChange={handleInputChange}
                                        InputProps={{
                                            startAdornment: <LinkIcon sx={{ mr: 1, color: 'action.active' }} />
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="GitHub URL"
                                        name="github"
                                        value={userData.github}
                                        onChange={handleInputChange}
                                        InputProps={{
                                            startAdornment: <CodeIcon sx={{ mr: 1, color: 'action.active' }} />
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Bio" name="bio"
                                        value={userData.bio}
                                        onChange={handleInputChange}
                                        multiline rows={4}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Skills
                                    </Typography>
                                    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                                        <TextField
                                            value={newSkill}
                                            onChange={(e) => setNewSkill(e.target.value)}
                                            label="Add Skill"
                                            size="small"
                                        />
                                        <Button
                                            variant="contained"
                                            onClick={handleAddSkill}
                                            disabled={!newSkill.trim()}
                                        >
                                            Add
                                        </Button>
                                    </Stack>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                        {userData.skills.map((skill, index) => (
                                            <Chip
                                                key={index}
                                                label={skill}
                                                onDelete={() => handleRemoveSkill(skill)}
                                            />
                                        ))}
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Divider sx={{ my: 4 }} />

                    <Stack direction="row" spacing={2} justifyContent="flex-end">
                        <Button
                            variant="outlined"
                            onClick={() => navigate(-1)}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            startIcon={<SaveIcon />}
                        >
                            Save Changes
                        </Button>
                    </Stack>
                </form>
            </Paper>
        </Box>
    );
};

export default EditProfile;