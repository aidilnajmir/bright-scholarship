import React from 'react';
import { AppBar, Toolbar, Typography, Container, IconButton, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate for programmatic navigation
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned'; // Updated to use AssignmentReturnedIcon
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function Header() {
    const navigate = useNavigate();  // Hook for programmatic navigation

    // Function to handle logout
    const handleLogout = () => {
        // Perform logout logic, like clearing tokens or user data
        // Then navigate to the login page
        navigate('/');  // Redirect to the login page
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'black' }}>
            <Toolbar>
                <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* Application Title */}
                    <Link to="/student/dashboard" style={{ textDecoration: 'none', color: 'white' }}>
                        <Typography variant="h6">
                            Bright Scholarship
                        </Typography>
                    </Link>

                    {/* Navigation Buttons */}
                    <Box display="flex" alignItems="center" sx={{ gap: 2 }}>
                        {/* Apply */}
                        <Box 
                            display="flex" 
                            alignItems="center" 
                            sx={{ borderLeft: '1px solid gray', paddingLeft: 2 }}
                        >
                            <IconButton color="inherit" component={Link} to="/student/apply">
                                <Box display="flex" alignItems="center">
                                    <AssignmentIcon />
                                    <Typography variant="body2" sx={{ marginLeft: 1 }}>Apply</Typography>
                                </Box>
                            </IconButton>
                        </Box>

                        {/* Status */}
                        <Box 
                            display="flex" 
                            alignItems="center" 
                            sx={{ borderLeft: '1px solid gray', paddingLeft: 2 }}
                        >
                            <IconButton color="inherit" component={Link} to="/student/status">
                                <Box display="flex" alignItems="center">
                                    <AssignmentReturnedIcon />
                                    <Typography variant="body2" sx={{ marginLeft: 1 }}>Status</Typography>
                                </Box>
                            </IconButton>
                        </Box>

                        {/* Logout */}
                        <Box 
                            display="flex" 
                            alignItems="center" 
                            sx={{ borderLeft: '1px solid gray', paddingLeft: 2 }}
                        >
                            <IconButton color="inherit" onClick={handleLogout}>
                                <Box display="flex" alignItems="center">
                                    <ExitToAppIcon />
                                    <Typography variant="body2" sx={{ marginLeft: 1 }}>Logout</Typography>
                                </Box>
                            </IconButton>
                        </Box>
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
