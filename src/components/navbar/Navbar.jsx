import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, Box, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Menu as MenuIcon, AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          {/* Drawer Toggle */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1 }}
          >
            DevConnect
          </Typography>

          <IconButton
            size="large"
            color="inherit"
            onClick={toggleDrawer(true)}
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer Content */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 300 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate('/login/dev')}>
                <ListItemText primary="Developer Login" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate('/login/user')}>
                <ListItemText primary="User Login" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate('/signup/dev')}>
                <ListItemText primary="Developer Sign Up" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate('/signup/user')}>
                <ListItemText primary="User Sign Up" />
              </ListItemButton>
            </ListItem>
          </List>

          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate('/dashboard')}>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;