import React from 'react';
import { AppBar, Toolbar, Typography, Container, IconButton, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function CommitteeHeader() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/'); // Redirect to the login page
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'black' }}>
            <Toolbar>
                <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* Application Title */}
                    <Link to="/committee/dashboard" style={{ textDecoration: 'none', color: 'white' }}>
                        <Typography variant="h6">
                            Bright Scholarship
                        </Typography>
                    </Link>

                    {/* Navigation Buttons */}
                    <Box display="flex" alignItems="center" sx={{ gap: 2 }}>
                        {/* View Applications */}
                        <Box 
                            display="flex" 
                            alignItems="center" 
                            sx={{ borderLeft: '1px solid gray', paddingLeft: 2 }}
                        >
                            <IconButton color="inherit" component={Link} to="/committee/view-applications">
                                <Box display="flex" alignItems="center">
                                    <AssignmentIcon />
                                    <Typography variant="body2" sx={{ marginLeft: 1 }}>View Applications</Typography>
                                </Box>
                            </IconButton>
                        </Box>

                        {/* Voting Page */}
                        <Box 
                            display="flex" 
                            alignItems="center" 
                            sx={{ borderLeft: '1px solid gray', paddingLeft: 2 }}
                        >
                            <IconButton color="inherit" component={Link} to="/committee/voting">
                                <Box display="flex" alignItems="center">
                                    <HowToVoteIcon />
                                    <Typography variant="body2" sx={{ marginLeft: 1 }}>Voting</Typography>
                                </Box>
                            </IconButton>
                        </Box>

                        {/* Reimbursement */}
                        <Box 
                            display="flex" 
                            alignItems="center" 
                            sx={{ borderLeft: '1px solid gray', paddingLeft: 2 }}
                        >
                            <IconButton color="inherit" component={Link} to="/committee/reimbursement">
                                <Box display="flex" alignItems="center">
                                    <MonetizationOnIcon />
                                    <Typography variant="body2" sx={{ marginLeft: 1 }}>Reimbursement</Typography>
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

export default CommitteeHeader;
