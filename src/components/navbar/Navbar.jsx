import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, Box, List, ListItem, ListItemButton, ListItemText, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon, AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [accountDrawerOpen, setAccountDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (type, open) => () => {
    if (type === 'menu') {
      setDrawerOpen(open);
    } else if (type === 'account') {
      setAccountDrawerOpen(open);
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>

            {/* Menu Icon - visible on mobile only */}
            {isMobile && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer('menu', true)}
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* DevConnect Text - click to navigate home */}
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, cursor: 'pointer' }}
              onClick={() => navigate('/')}
            >
              DevConnect
            </Typography>

            {/* Account Icon */}
            <IconButton
              size="large"
              color="inherit"
              onClick={toggleDrawer('account', true)}
            >
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Left Drawer (Main Menu) */}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer('menu', false)}
        >
          <Box
            sx={{ width: 300 }}
            role="presentation"
            onClick={toggleDrawer('menu', false)}
            onKeyDown={toggleDrawer('menu', false)}
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('/')}>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('/dashboard')}>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>
               <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate('/signup/dev')}>
                    <ListItemText primary="Developer Sign Up" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate('/login/dev')}>
                    <ListItemText primary="Developer Login" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate('/signup/user')}>
                    <ListItemText primary="User Sign Up" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate('/login/user')}>
                    <ListItemText primary="User Login" />
                  </ListItemButton>
                </ListItem>
              </List>
            </List>
          </Box>
        </Drawer>

        {!isMobile && (
          <Drawer
            anchor="right"
            open={accountDrawerOpen}
            onClose={toggleDrawer('account', false)}
          >
            <Box
              sx={{ width: 300 }}
              role="presentation"
              onClick={toggleDrawer('account', false)}
              onKeyDown={toggleDrawer('account', false)}
            >
              <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate('/signup/dev')}>
                    <ListItemText primary="Developer Sign Up" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate('/login/dev')}>
                    <ListItemText primary="Developer Login" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate('/signup/user')}>
                    <ListItemText primary="User Sign Up" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate('/login/user')}>
                    <ListItemText primary="User Login" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Drawer>
        )}
      </Box>
    </>
  );
};

export default Navbar;
