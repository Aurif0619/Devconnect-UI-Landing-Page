import React from 'react'

import { Box, Typography, Paper, Stack, Chip, Divider, LinearProgress, Button } from '@mui/material';

import { ArrowBack as BackIcon, Link as LinkIcon, Code as CodeIcon, CalendarToday as CalendarIcon, Person as PersonIcon } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

const ProjectDetailPage = () => {
    const { state } = useLocation();
    const project = state?.project || {};
    const navigate = useNavigate();

    return (
        <>
            <Box sx={{ p: 4 }}>
                <Button
                    startIcon={<BackIcon />}
                    onClick={() => navigate('/dashboard')}
                    sx={{ mb: 2 }}>
                    Back to Projects
                </Button>

                <Paper elevation={3} sx={{ p: 4 }}>
                    <Typography variant="h4" gutterBottom>
                        {project.name}
                        <Chip
                            label={project.status}
                            sx={{ ml: 2 }}
                            color={
                                project.status === 'Active' ? 'primary' :
                                    project.status === 'Completed' ? 'success' : 'warning'
                            }
                        />
                    </Typography>

                    <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                        <Chip icon={<CalendarIcon />} label={`Started: Jan 2023`} />
                        <Chip icon={<PersonIcon />} sx={{ display: { xs: 'none', sm: 'flex' } }} label={`Team: 3 members`} />
                    </Stack>

                    <Divider sx={{ my: 3 }} />

                    <Typography variant="h6" gutterBottom>Description</Typography>
                    <Typography paragraph>{project.description}</Typography>

                    <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>Technologies</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                        {project.tech?.map((tech, index) => (
                            <Chip key={index} label={tech} icon={<CodeIcon />} />
                        ))}
                    </Box>

                    <Typography variant="h6" gutterBottom>Progress</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box sx={{ width: '100%', mr: 2 }}>
                            <LinearProgress
                                variant="determinate"
                                value={project.progress}
                                sx={{ height: 10, borderRadius: 5 }}
                            />
                        </Box>
                        <Typography>{project.progress}%</Typography>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    <Typography variant="h6" gutterBottom>Project Links</Typography>
                    <Stack direction="row" spacing={2}>
                        <Button
                            variant="outlined"
                            startIcon={<LinkIcon />}
                            component="a"
                            href="#"
                            target="_blank"
                        >
                            Live Demo
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<CodeIcon />}
                            component="a" href="#"
                            target="_blank"
                        >
                            Source Code
                        </Button>
                    </Stack>
                </Paper>
            </Box>
        </>
    )
}

export default ProjectDetailPage;