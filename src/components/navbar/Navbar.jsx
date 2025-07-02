import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Menu, MenuItem, Button, useMediaQuery, Avatar, Divider } from '@mui/material';
import { Menu as MenuIcon, ArrowDropDown, Code, Person, Home, Dashboard, DarkMode } from '@mui/icons-material';

import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const [mobileAnchor, setMobileAnchor] = useState(null);
  const [devAnchor, setDevAnchor] = useState(null);
  const [userAnchor, setUserAnchor] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMobileMenuOpen = (event) => {
    setMobileAnchor(event.currentTarget);
  };

  const handleDevMenuOpen = (event) => {
    setDevAnchor(event.currentTarget);
  };

  const handleUserMenuOpen = (event) => {
    setUserAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMobileAnchor(null);
    setDevAnchor(null);
    setUserAnchor(null);
  };

  const handleNavigation = (path) => {
    navigate(path);
    handleMenuClose();
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <AppBar position="static" elevation={0} sx={{
      }}>
        <Toolbar sx={{
          justifyContent: 'space-between',
          px: { xs: 0, md: 4 },
          width: '100%',
          maxWidth: '1200px',
          overflowX: 'hidden'
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center', flex: 1
          }}>
            <Avatar
              src="/logo.png"
              alt="DevConnect"
              sx={{
                mx: 2, color: 'white',
                cursor: 'pointer',
                width: 40, height: 40,
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.1)'
                }
              }}
              onClick={() => navigate('/')}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: 'white',
                cursor: 'pointer',
                display: { xs: 'none', sm: 'block' },
                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
              onClick={() => navigate('/')}
            >
              DevConnect
            </Typography>
          </Box>

          {!isMobile && (
            <Box sx={{
              display: 'flex',
              gap: 1,
              flex: 1,
              justifyContent: 'center'
            }}>
              <Button
                startIcon={<Home />}
                color={isActive('/') ? 'secondary' : 'inherit'}
                variant={isActive('/') ? 'contained' : 'text'}
                sx={{
                  borderRadius: 2,
                  px: 3,
                  textTransform: 'none',
                  fontWeight: isActive('/') ? 600 : 500,
                  color: 'white',
                  '&:hover': {
                    backgroundColor: isActive('/') ? '' : 'rgba(255,255,255,0.1)'
                  }
                }}
                onClick={() => navigate('/')}>
                Home
              </Button>
              <Button
                startIcon={<Dashboard />}
                color={isActive('/selection') ? 'secondary' : 'inherit'}
                variant={isActive('/selection') ? 'contained' : 'text'}
                sx={{
                  borderRadius: 2,
                  px: 3,
                  textTransform: 'none',
                  fontWeight: isActive('/selection') ? 600 : 500,
                  color: 'white',
                  '&:hover': {
                    backgroundColor: isActive('/selection') ? '' : 'rgba(255,255,255,0.1)'
                  }
                }}
                onClick={() => navigate('/selection')}
              >
                Selection
              </Button>
            </Box>
          )}

          <Box sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            flex: 1,
            justifyContent: 'flex-end'
          }}>

            <IconButton sx={{ color: 'white' }}>
              <DarkMode />
            </IconButton>

            {!isMobile ? (
              <>
                <Box>
                  <Button
                    color="secondary"
                    variant={devAnchor ? 'contained' : 'outlined'}
                    startIcon={<Code />}
                    endIcon={<ArrowDropDown />}
                    onClick={handleDevMenuOpen}
                    sx={{
                      borderRadius: 2,
                      px: 3,
                      textTransform: 'none',
                      fontWeight: 600,
                      color: 'white',
                      borderColor: 'rgba(255,255,255,0.3)',
                      '&:hover': {
                        borderColor: 'white'
                      }
                    }}
                  >
                    Developers
                  </Button>
                  <Menu
                    anchorEl={devAnchor}
                    open={Boolean(devAnchor)}
                    onClose={handleMenuClose}
                    PaperProps={{
                      elevation: 3,
                      sx: {
                        borderRadius: 2,
                        mt: 1,
                        minWidth: 200,
                        backdropFilter: 'blur(20px)',
                      }
                    }}
                  >
                    <MenuItem
                      onClick={() => handleNavigation('/signup/dev')}
                      sx={{ py: 1.5 }}
                    >
                      <Code sx={{ mr: 1.5, color: theme.palette.secondary.main }} /> Developer Sign Up
                    </MenuItem>
                    <MenuItem
                      onClick={() => handleNavigation('/login/dev')}
                      sx={{ py: 1.5 }}
                    >
                      <Code sx={{ mr: 1.5, color: theme.palette.secondary.main }} /> Developer Login
                    </MenuItem>
                  </Menu>
                </Box>

                <Box>
                  <Button
                    color="secondary"
                    variant={userAnchor ? 'contained' : 'outlined'}
                    startIcon={<Person />}
                    endIcon={<ArrowDropDown />}
                    onClick={handleUserMenuOpen}
                    sx={{
                      borderRadius: 2,
                      px: 3,
                      textTransform: 'none',
                      fontWeight: 600,
                      color: 'white',
                      borderColor: 'rgba(255,255,255,0.3)',
                      '&:hover': {
                        borderColor: 'white'
                      }
                    }}
                  >
                    Users
                  </Button>
                  <Menu
                    anchorEl={userAnchor}
                    open={Boolean(userAnchor)}
                    onClose={handleMenuClose}
                    PaperProps={{
                      elevation: 3,
                      sx: {
                        borderRadius: 2,
                        mt: 1,
                        minWidth: 200,
                        backdropFilter: 'blur(20px)',
                      }
                    }}
                  >
                    <MenuItem
                      onClick={() => handleNavigation('/signup/user')}
                      sx={{ py: 1.5 }}
                    >
                      <Person sx={{ mr: 1.5, color: theme.palette.secondary.main }} /> User Sign Up
                    </MenuItem>
                    <MenuItem
                      onClick={() => handleNavigation('/login/user')}
                      sx={{ py: 1.5 }}
                    >
                      <Person sx={{ mr: 1.5, color: theme.palette.secondary.main }} /> User Login
                    </MenuItem>
                  </Menu>
                </Box>
              </>
            ) : (
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMobileMenuOpen}
                sx={{ color: 'white' }}
              >
                <MenuIcon style={{ marginRight: '10px' }} />
              </IconButton>
            )}
          </Box>

          <Menu
            anchorEl={mobileAnchor}
            open={Boolean(mobileAnchor)}
            onClose={handleMenuClose}
            PaperProps={{
              elevation: 3,
              sx: {
                borderRadius: 2,
                mt: 1,
                minWidth: 200,
                backdropFilter: 'blur(20px)',
              }
            }}
          >
            <MenuItem
              onClick={() => handleNavigation('/')}
              sx={{ py: 1.5 }}
            >
              <Home sx={{ mr: 1.5, color: theme.palette.secondary.main }} /> Home
            </MenuItem>
            <MenuItem
              onClick={() => handleNavigation('/selection')}
              sx={{ py: 1.5 }}
            >
              <Dashboard sx={{ mr: 1.5, color: theme.palette.secondary.main }} /> Selection
            </MenuItem>
            <Divider sx={{ my: 1 }} />
            <MenuItem
              onClick={() => handleNavigation('/signup/dev')}
              sx={{ py: 1.5 }}
            >
              <Code sx={{ mr: 1.5, color: theme.palette.secondary.main }} /> Developer Sign Up
            </MenuItem>
            <MenuItem
              onClick={() => handleNavigation('/login/dev')}
              sx={{ py: 1.5 }}
            >
              <Code sx={{ mr: 1.5, color: theme.palette.secondary.main }} /> Developer Login
            </MenuItem>
            <Divider sx={{ my: 1 }} />
            <MenuItem
              onClick={() => handleNavigation('/signup/user')}
              sx={{ py: 1.5 }}
            >
              <Person sx={{ mr: 1.5, color: theme.palette.secondary.main }} /> User Sign Up
            </MenuItem>
            <MenuItem
              onClick={() => handleNavigation('/login/user')}
              sx={{ py: 1.5 }}
            >
              <Person sx={{ mr: 1.5, color: theme.palette.secondary.main }} /> User Login
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;