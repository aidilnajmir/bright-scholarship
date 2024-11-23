import React from 'react';
import { AppBar, Toolbar, Typography, Container, IconButton, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function AdminHeader() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/'); // Redirect to the login page
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'black' }}>
            <Toolbar>
                <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* Application Title */}
                    <Link to="/admin/dashboard" style={{ textDecoration: 'none', color: 'white' }}>
                        <Typography variant="h6">
                            Bright Scholarship
                        </Typography>
                    </Link>

                    {/* Navigation Buttons */}
                    <Box display="flex" alignItems="center" sx={{ gap: 2 }}>
                        {/* Manage Users */}
                        <Box display="flex" alignItems="center" sx={{ borderLeft: '1px solid gray', paddingLeft: 2 }}>
                            <IconButton color="inherit" component={Link} to="/admin/manage-users">
                                <Box display="flex" alignItems="center">
                                    <PeopleIcon />
                                    <Typography variant="body2" sx={{ marginLeft: 1 }}>Manage Users</Typography>
                                </Box>
                            </IconButton>
                        </Box>

                        {/* Manage Application Dates */}
                        <Box display="flex" alignItems="center" sx={{ borderLeft: '1px solid gray', paddingLeft: 2 }}>
                            <IconButton color="inherit" component={Link} to="/admin/manage-application">
                                <Box display="flex" alignItems="center">
                                    <CalendarTodayIcon />
                                    <Typography variant="body2" sx={{ marginLeft: 1 }}>Manage Dates</Typography>
                                </Box>
                            </IconButton>
                        </Box>

                        {/* View All Applications */}
                        <Box display="flex" alignItems="center" sx={{ borderLeft: '1px solid gray', paddingLeft: 2 }}>
                            <IconButton color="inherit" component={Link} to="/admin/view-all-applications">
                                <Box display="flex" alignItems="center">
                                    <AssignmentIcon />
                                    <Typography variant="body2" sx={{ marginLeft: 1 }}>View Applications</Typography>
                                </Box>
                            </IconButton>
                        </Box>

                        {/* Logout */}
                        <Box display="flex" alignItems="center" sx={{ borderLeft: '1px solid gray', paddingLeft: 2 }}>
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

export default AdminHeader;
