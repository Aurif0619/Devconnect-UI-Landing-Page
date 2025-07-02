import React, { useState } from 'react';
import { Box, Drawer, CssBaseline, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText,
    Typography, Grid, Card, CardContent, Avatar, Stack, Chip, Tabs, Tab, Paper, IconButton, useMediaQuery, useTheme
} from '@mui/material';

import {
    Person as ProfileIcon, Work as ProjectsIcon, ExitToApp as LogoutIcon,
    Assignment as ActiveProjectsIcon, MonetizationOn as BidsIcon, Group as TeamIcon,
    Assessment as StatsIcon, Code as CodeIcon, Computer as ComputerIcon,
    PhoneAndroid as MobileIcon, Palette as DesignIcon, Menu as MenuIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import StarRateIcon from '@mui/icons-material/StarRate';
const drawerWidth = 290;

const Dashboard = () => {
    const navigate = useNavigate();
    const [tabValue, setTabValue] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const storedUserData = JSON.parse(localStorage.getItem('developerData')) ||
        JSON.parse(localStorage.getItem('userData'));

    const userData = storedUserData || {
        name: "Muhammad Aurif",
        email: "m.aurif@example.com",
        role: "Frontend Developer",
        linkedin: "https://linkedin.com/in/muhammad-aurif",
        github: "https://github.com/muhammad-aurif",
        skills: ["JavScript", "React.js", "Tailwind CSS", "Next.js", "WordPress"],
        bio: "Experienced Frontend Developer with 1.5+ years of building web applications."
    };

    const projects = {
        fullstack: [
            {
                id: 1,
                name: 'E-commerce Platform',
                progress: 75,
                description: 'Full-featured online store with payment integration',
                tech: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
                status: 'Active',
                startDate: 'Jan 2023',
                teamSize: 3
            },
            {
                id: 2,
                name: 'Task Management',
                progress: 100,
                description: 'Collaborative project management tool',
                tech: ['Vue.js', 'Express', 'PostgreSQL'],
                status: 'Completed',
                startDate: 'Mar 2022',
                teamSize: 2
            },
            {
                id: 8,
                name: 'Social Media',
                progress: 45,
                description: 'Analytics dashboard for social media metrics',
                tech: ['React', 'Django', 'PostgreSQL', 'Chart.js'],
                status: 'Active',
                startDate: 'Jun 2023',
                teamSize: 4
            },
            {
                id: 9,
                name: 'CRM System',
                progress: 90,
                description: 'Customer relationship management platform',
                tech: ['Angular', 'NestJS', 'MySQL'],
                status: 'Active',
                startDate: 'Feb 2023',
                teamSize: 5
            }
        ],
        frontend: [
            {
                id: 3,
                name: 'Portfolio Website',
                progress: 30,
                description: 'Personal portfolio with interactive elements',
                tech: ['React', 'Material-UI', 'Framer Motion'],
                status: 'In Progress',
                startDate: 'May 2023',
                teamSize: 1
            },
            {
                id: 4,
                name: 'Weather Web Application',
                progress: 100,
                description: 'Real-time weather visualization',
                tech: ['JavaScript', 'Chart.js', 'Weather API'],
                status: 'Completed',
                startDate: 'Feb 2023',
                teamSize: 1
            },
            {
                id: 10,
                name: 'Recipe Finder Web',
                progress: 85,
                description: 'Interactive recipe search application',
                tech: ['React', 'Redux', 'Edamam API'],
                status: 'Active',
                startDate: 'Apr 2023',
                teamSize: 2
            },
            {
                id: 11,
                name: 'Fitness Tracker',
                progress: 100,
                description: 'Workout tracking dashboard',
                tech: ['Vue.js', 'Firebase', 'D3.js'],
                status: 'Completed',
                startDate: 'Jan 2023',
                teamSize: 1
            }
        ],
        software: [
            {
                id: 5,
                name: 'Inventory System',
                progress: 90,
                description: 'Desktop application for inventory management',
                tech: ['Java', 'Spring Boot', 'MySQL'],
                status: 'Active',
                startDate: 'Nov 2022',
                teamSize: 4
            },
            {
                id: 12,
                name: 'PDF Editor Application',
                progress: 60,
                description: 'Desktop PDF manipulation tool',
                tech: ['Electron', 'React', 'PDF.js'],
                status: 'Active',
                startDate: 'Mar 2023',
                teamSize: 3
            },
            {
                id: 13,
                name: 'Automation Tool App',
                progress: 100,
                description: 'File processing automation software',
                tech: ['Python', 'PyQt', 'OpenCV'],
                status: 'Completed',
                startDate: 'Dec 2022',
                teamSize: 2
            }
        ],
        design: [
            {
                id: 6,
                name: 'Mobile App Redesign',
                progress: 60,
                description: 'UI/UX redesign for fitness tracking app',
                tech: ['Figma', 'Adobe XD', 'Illustrator'],
                status: 'Active',
                startDate: 'Apr 2023',
                teamSize: 2
            },
            {
                id: 7,
                name: 'Website Wireframes',
                progress: 100,
                description: 'Complete wireframing for corporate website',
                tech: ['Sketch', 'InVision', 'Photoshop'],
                status: 'Completed',
                startDate: 'Dec 2022',
                teamSize: 3
            },
            {
                id: 14,
                name: 'Brand Identity Design ',
                progress: 100,
                description: 'Complete branding for startup company',
                tech: ['Illustrator', 'Photoshop', 'After Effects'],
                status: 'Completed',
                startDate: 'Oct 2022', teamSize: 2
            },
            {
                id: 15,
                name: 'Dashboard UI Kit',
                progress: 40,
                description: 'Custom component library for admin dashboards',
                tech: ['Figma', 'Storybook', 'Lottie'],
                status: 'In Progress',
                startDate: 'Jun 2023', teamSize: 1
            }
        ]
    };

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleLogout = () => {
        localStorage.removeItem('userData');
        localStorage.removeItem('developerData');
        navigate('/');
    };

    const handleProfileClick = () => {
        navigate('/profile', { state: { userData } });
    };

    const handleProjectClick = (project) => {
        navigate('/project-detail', { state: { project, userData } });
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const ProjectCard = ({ project }) => (
        <Card
            onClick={() => handleProjectClick(project)}
            sx={{
                cursor: 'pointer', height: '100%',
                width: '100%', transition: 'transform 0.2s',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 3
                }
            }}
        >
            <CardContent sx={{ flexGrow: 1 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" gutterBottom sx={{ wordBreak: 'break-word' }}>
                        {project.name}
                    </Typography>
                    <Chip
                        label={project.status}
                        size="small"
                        color={
                            project.status === 'Active' ? 'primary' :
                                project.status === 'Completed' ? 'success' : 'warning'
                        }
                    />
                </Stack>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {project.description}
                </Typography>

                <Box sx={{ mb: 2 }}>
                    <Typography variant="caption" color="text.secondary">Technologies:</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                        {project.tech.map((tech, i) => (
                            <Chip
                                key={i}
                                label={tech}
                                size="small"
                                variant="outlined"
                            />
                        ))}
                    </Box>
                </Box>

                <Box sx={{ mb: 2 }}>
                    <Typography variant="caption" color="text.secondary">Team:</Typography>
                    <Typography variant="body2">{project.teamSize} members</Typography>
                </Box>

                <Box>
                    <Typography variant="caption" color="text.secondary">Progress:</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        <Box sx={{ width: '100%', mr: 1 }}>
                            <Box
                                sx={{
                                    height: 8,
                                    background: `linear-gradient(90deg, #1976d2 ${project.progress}%, #e0e0e0 ${project.progress}%)`,
                                    borderRadius: 4
                                }}
                            />
                        </Box>
                        <Typography variant="body2" fontWeight="bold">{project.progress}%</Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );

    const drawer = (
        <Box sx={{ overflow: 'auto', p: 2 }}>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3, p: 2 }}>
                <Avatar sx={{
                    bgcolor: 'primary.main',
                    width: 48, height: 48
                }}>
                    {userData.name.charAt(0)}
                </Avatar>
                <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                        {userData.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        {userData.role}
                    </Typography>
                </Box>
            </Stack>

            <Divider sx={{ my: 1 }} />

            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={handleProfileClick}>
                        <ListItemIcon><ProfileIcon /></ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/project-detail')}>
                        <ListItemIcon><ProjectsIcon /></ListItemIcon>
                        <ListItemText primary="Projects" />
                    </ListItemButton>
                </ListItem>
            </List>

            <Divider sx={{ my: 1 }} />

            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={handleLogout}>
                        <ListItemIcon><LogoutIcon /></ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex', }}>
            <CssBaseline />
            {isMobile && (
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            backgroundColor: '#f5f5f5'
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            )}

            {!isMobile && (
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            backgroundColor: '#f5f5f5',
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            )}

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: isMobile ? 2 : 3,
                    width: isMobile ? '100%' : `calc(100% - ${drawerWidth}px)`
                }}
            >
                {isMobile && (
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Dashboard
                        </Typography>
                    </Box>
                )}

                <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
                    Dashboard Overview
                </Typography>

                <Grid container spacing={isMobile ? 1 : 3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{
                            height: '100%',
                            background: 'linear-gradient(135deg, #1976d2 0%, #2196f3 100%)',
                            color: 'white'
                        }}>
                            <CardContent>
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <Avatar sx={{ bgcolor: 'white', color: '#1976d2' }}>
                                        <ActiveProjectsIcon />
                                    </Avatar>
                                    <Box>
                                        <Typography variant="h5">
                                            {projects.fullstack.length + projects.frontend.length +
                                                projects.software.length + projects.design.length}
                                        </Typography>
                                        <Typography variant="body2">Total Projects</Typography>
                                    </Box>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{
                            height: '100%',
                            background: 'linear-gradient(135deg, #4caf50 0%, #8bc34a 100%)',
                            color: 'white'
                        }}>
                            <CardContent>
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <Avatar sx={{ bgcolor: 'white', color: '#4caf50' }}>
                                        <BidsIcon />
                                    </Avatar>
                                    <Box>
                                        <Typography variant="h5">5</Typography>
                                        <Typography variant="body2">Recent Bids</Typography>
                                    </Box>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{
                            height: '100%',
                            background: 'linear-gradient(135deg, #ff9800 0%, #ffc107 100%)',
                            color: 'white'
                        }}>
                            <CardContent>
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <Avatar sx={{ bgcolor: 'white', color: '#ff9800' }}>
                                        <TeamIcon />
                                    </Avatar>
                                    <Box>
                                        <Typography variant="h5">2</Typography>
                                        <Typography variant="body2">Team Player</Typography>
                                    </Box>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{
                            height: '100%',
                            background: 'linear-gradient(135deg, #e91e63 0%, #00acc1 100%)',
                            color: 'white'
                        }}>
                            <CardContent>
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <Avatar sx={{ bgcolor: 'white', color: '#00bcd4' }}>
                                        <StatsIcon />
                                    </Avatar>
                                    <Box>
                                        <Typography variant="h5">85%</Typography>
                                        <Typography variant="body2">Success Rate</Typography>
                                    </Box>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{
                            height: '100%',
                            background: 'linear-gradient(135deg, #ff6f00 0%, #ffb300 100%)',
                            color: 'white'
                        }}>
                            <CardContent>
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <Avatar sx={{ bgcolor: 'white', color: '#ff6f00' }}>
                                        <StarRateIcon />
                                    </Avatar>
                                    <Box>
                                        <Typography variant="h5">4.9⭐</Typography>
                                        <Typography variant="body2">Client Rating</Typography>
                                    </Box>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sx={{ width: '100%' }}>
                        <Card elevation={2} sx={{ p: isMobile ? 1 : 2, borderRadius: 3 }}>
                            <Paper elevation={0} sx={{ borderRadius: 2 }}>
                                <Tabs
                                    value={tabValue}
                                    onChange={handleTabChange}
                                    aria-label="project types"
                                    variant={isMobile ? "scrollable" : "fullWidth"}
                                    scrollButtons="auto"
                                    allowScrollButtonsMobile
                                    sx={{
                                        '& .MuiTabs-indicator': {
                                            height: 4,
                                            borderRadius: '4px 4px 0 0'
                                        },
                                        '& .MuiTab-root': {
                                            minHeight: 60,
                                            transition: 'all 0.3s',
                                            '&.Mui-selected': {
                                                color: theme.palette.primary.main,
                                                fontWeight: 'bold'
                                            }
                                        }
                                    }}
                                >
                                    <Tab label="Full Stack" icon={<ComputerIcon />} iconPosition="start"
                                        sx={{
                                            background: tabValue === 0 ? 'linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, rgba(33, 150, 243, 0.1) 100%)' : 'transparent',
                                            borderRadius: 1
                                        }}
                                    />
                                    <Tab label="Frontend" icon={<CodeIcon />} iconPosition="start"
                                        sx={{
                                            background: tabValue === 1 ? 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(139, 195, 74, 0.1) 100%)' : 'transparent',
                                            borderRadius: 1
                                        }}
                                    />
                                    <Tab label="Software" icon={<MobileIcon />} iconPosition="start"
                                        sx={{
                                            background: tabValue === 2 ? 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 193, 7, 0.1) 100%)' : 'transparent',
                                            borderRadius: 1
                                        }}
                                    />
                                    <Tab label="UI/UX Design" icon={<DesignIcon />} iconPosition="start"
                                        sx={{
                                            background: tabValue === 3 ? 'linear-gradient(135deg, rgba(233, 30, 99, 0.1) 0%, rgba(0, 172, 193, 0.1) 100%)' : 'transparent',
                                            borderRadius: 1
                                        }}
                                    />
                                </Tabs>
                            </Paper>

                            <Box sx={{ mt: 3 }}>
                                {tabValue === 0 && (
                                    <Grid container spacing={isMobile ? 1 : 2}>
                                        {projects.fullstack.map((project) => (
                                            <Grid item xs={12} sm={6} md={4} lg={3} key={`fullstack-${project.id}`}>
                                                <ProjectCard project={project} />
                                            </Grid>
                                        ))}
                                    </Grid>
                                )}

                                {tabValue === 1 && (
                                    <Grid container spacing={isMobile ? 1 : 2}>
                                        {projects.frontend.map((project) => (
                                            <Grid item xs={12} sm={6} md={4} lg={3} key={`frontend-${project.id}`}>
                                                <ProjectCard project={project} />
                                            </Grid>
                                        ))}
                                    </Grid>
                                )}

                                {tabValue === 2 && (
                                    <Grid container spacing={isMobile ? 1 : 2}>
                                        {projects.software.map((project) => (
                                            <Grid item xs={12} sm={6} md={4} lg={3} key={`software-${project.id}`}>
                                                <ProjectCard project={project} />
                                            </Grid>
                                        ))}
                                    </Grid>
                                )}

                                {tabValue === 3 && (
                                    <Grid container spacing={isMobile ? 1 : 2}>
                                        {projects.design.map((project) => (
                                            <Grid item xs={12} sm={6} md={4} lg={3} key={`design-${project.id}`}>
                                                <ProjectCard project={project} />
                                            </Grid>
                                        ))}
                                    </Grid>
                                )}
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Dashboard;