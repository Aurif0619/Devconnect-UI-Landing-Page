import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, Box,
  Menu, MenuItem, Button, useMediaQuery, Avatar,
  Divider
} from '@mui/material';
import {
  Menu as MenuIcon,
  ArrowDropDown,
  Code,
  Person,
  Home,
  Dashboard
} from '@mui/icons-material';
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

  // Check active route for button styling
  const isActive = (path) => location.pathname === path;

  return (
    <AppBar position="static" elevation={1} sx={{
      bgcolor: 'background.paper',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <Toolbar sx={{
        justifyContent: 'space-between',
        px: { xs: 2, md: 4 }
      }}>
        {/* Logo Section */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          flex: isMobile ? 1 : 0
        }}>
          <Avatar
            src="/logo.png"
            alt="DevConnect"
            sx={{
              mr: 2,
              bgcolor: 'primary.main',
              cursor: 'pointer',
              width: 40,
              height: 40
            }}
            onClick={() => navigate('/')}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: 'text.primary',
              cursor: 'pointer',
              display: { xs: 'none', sm: 'block' }
            }}
            onClick={() => navigate('/')}
          >
            DevConnect
          </Typography>
        </Box>

        {/* Center Navigation - Only on desktop */}
        {!isMobile && (
          <Box sx={{
            display: 'flex',
            gap: 1,
            flex: 1,
            justifyContent: 'center',
            mx: 4
          }}>
            <Button
              startIcon={<Home />}
              color={isActive('/') ? 'primary' : 'inherit'}
              variant={isActive('/') ? 'contained' : 'text'}
              sx={{
                borderRadius: 2,
                px: 3,
                textTransform: 'none',
                fontWeight: isActive('/') ? 600 : 500
              }}
              onClick={() => navigate('/')}
            >
              Home
            </Button>
            <Button
              startIcon={<Dashboard />}
              color={isActive('/selection') ? 'primary' : 'inherit'}
              variant={isActive('/selection') ? 'contained' : 'text'}
              sx={{
                borderRadius: 2,
                px: 3,
                textTransform: 'none',
                fontWeight: isActive('/selection') ? 600 : 500
              }}
              onClick={() => navigate('/selection')}
            >
              Selection
            </Button>
          </Box>
        )}

        {/* Right Side - Auth Buttons */}
        <Box sx={{
          display: 'flex',
          gap: 2,
          flex: isMobile ? 0 : 1,
          justifyContent: 'flex-end'
        }}>
          {!isMobile ? (
            <>
              <Box>
                <Button
                  color="primary"
                  variant={devAnchor ? 'contained' : 'outlined'}
                  startIcon={<Code />}
                  endIcon={<ArrowDropDown />}
                  onClick={handleDevMenuOpen}
                  sx={{
                    borderRadius: 2,
                    px: 3,
                    textTransform: 'none',
                    fontWeight: 600
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
                      minWidth: 200
                    }
                  }}
                >
                  <MenuItem
                    onClick={() => handleNavigation('/signup/dev')}
                    sx={{ py: 1.5 }}
                  >
                    Developer Sign Up
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleNavigation('/login/dev')}
                    sx={{ py: 1.5 }}
                  >
                    Developer Login
                  </MenuItem>
                </Menu>
              </Box>

              <Box>
                <Button
                  color="primary"
                  variant={userAnchor ? 'contained' : 'outlined'}
                  startIcon={<Person />}
                  endIcon={<ArrowDropDown />}
                  onClick={handleUserMenuOpen}
                  sx={{
                    borderRadius: 2,
                    px: 3,
                    textTransform: 'none',
                    fontWeight: 600
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
                      minWidth: 200
                    }
                  }}
                >
                  <MenuItem
                    onClick={() => handleNavigation('/signup/user')}
                    sx={{ py: 1.5 }}
                  >
                    User Sign Up
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleNavigation('/login/user')}
                    sx={{ py: 1.5 }}
                  >
                    User Login
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
              sx={{ color: 'text.primary' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>

        {/* Mobile Menu */}
        <Menu
          anchorEl={mobileAnchor}
          open={Boolean(mobileAnchor)}
          onClose={handleMenuClose}
          PaperProps={{
            elevation: 3,
            sx: {
              borderRadius: 2,
              mt: 1,
              minWidth: 200
            }
          }}
        >
          <MenuItem
            onClick={() => handleNavigation('/')}
            sx={{ py: 1.5 }}
          >
            <Home sx={{ mr: 1.5 }} /> Home
          </MenuItem>
          <MenuItem
            onClick={() => handleNavigation('/selection')}
            sx={{ py: 1.5 }}
          >
            <Dashboard sx={{ mr: 1.5 }} /> Selection
          </MenuItem>
          <Divider sx={{ my: 1 }} />
          <MenuItem
            onClick={() => handleNavigation('/signup/dev')}
            sx={{ py: 1.5 }}
          >
            <Code sx={{ mr: 1.5 }} /> Developer Sign Up
          </MenuItem>
          <MenuItem
            onClick={() => handleNavigation('/login/dev')}
            sx={{ py: 1.5 }}
          >
            <Code sx={{ mr: 1.5 }} /> Developer Login
          </MenuItem>
          <Divider sx={{ my: 1 }} />
          <MenuItem
            onClick={() => handleNavigation('/signup/user')}
            sx={{ py: 1.5 }}
          >
            <Person sx={{ mr: 1.5 }} /> User Sign Up
          </MenuItem>
          <MenuItem
            onClick={() => handleNavigation('/login/user')}
            sx={{ py: 1.5 }}
          >
            <Person sx={{ mr: 1.5 }} /> User Login
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;