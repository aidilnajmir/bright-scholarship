import React, { useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton, Menu, MenuItem, Box } from '@mui/material';
import AdminHeader from '../components/AdminHeader';
import Footer from '../components/Footer';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const sampleUsers = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', role: 'Admin' },
    { id: 2, name: 'Michael Brown', email: 'michaelb@example.com', role: 'Committee' },
    { id: 3, name: 'Sarah Johnson', email: 'sarahj@example.com', role: 'Student' },
    { id: 4, name: 'Emily Davis', email: 'emilyd@example.com', role: 'Committee' },
    { id: 5, name: 'Jane Smith', email: 'janesmith@example.com', role: 'Student' },
    { id: 6, name: 'David Clark', email: 'davidc@example.com', role: 'Committee' },
    { id: 7, name: 'Olivia Turner', email: 'oliviat@example.com', role: 'Student' },
    { id: 8, name: 'William Moore', email: 'williamm@example.com', role: 'Student' },
    { id: 9, name: 'Sophia Lee', email: 'sophial@example.com', role: 'Committee' },
    { id: 10, name: 'Lucas Kim', email: 'lucask@example.com', role: 'Student' },
];

function ManageUsers() {
    const [users, setUsers] = useState(sampleUsers);
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleDelete = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
    };

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    const handleRoleChange = (newRole) => {
        if (selectedUser) {
            setUsers(users.map(user => user.id === selectedUser.id ? { ...user, role: newRole } : user));
        }
        setAnchorEl(null);
    };

    const handleRoleMenuOpen = (event, user) => {
        setSelectedUser(user);
        setAnchorEl(event.currentTarget);
    };

    const renderTable = (role) => {
        const filteredUsers = users.filter(user => user.role === role);

        return (
            <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredUsers.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.role}</TableCell>
                                <TableCell>
                                    {/* MoreVert Icon for changing roles (Admin/Committee only) */}
                                    {(user.role === 'Admin' || user.role === 'Committee') && (
                                        <IconButton
                                            onClick={(event) => handleRoleMenuOpen(event, user)}
                                            color="primary"
                                            aria-controls="role-menu"
                                            aria-haspopup="true"
                                        >
                                            <MoreVertIcon />
                                        </IconButton>
                                    )}

                                    {/* Delete Button */}
                                    <IconButton
                                        onClick={() => handleDelete(user.id)}
                                        color="secondary"
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    };

    return (
        <div>
            <AdminHeader />
            <div style={{ padding: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    Manage Users
                </Typography>
                
                {/* Filters */}
                <div style={{ marginBottom: '20px' }}>
                    <Button onClick={() => handleFilterChange('All')} variant="contained" color="secondary" style={{ marginRight: '10px' }}>
                        View All
                    </Button>
                    <Button onClick={() => handleFilterChange('Student')} variant="contained" color="primary" style={{ marginRight: '10px' }}>
                        View Students
                    </Button>
                    <Button onClick={() => handleFilterChange('Committee')} variant="contained" color="primary" style={{ marginRight: '10px' }}>
                        View Committees
                    </Button>
                    <Button onClick={() => handleFilterChange('Admin')} variant="contained" color="primary">
                        View Admins
                    </Button>
                </div>

                {/* Conditionally Render Tables based on selected filter */}
                {selectedFilter === 'All' && (
                    <>
                        {renderTable('Admin')}
                        {renderTable('Committee')}
                        {renderTable('Student')}
                    </>
                )}
                {selectedFilter === 'Student' && renderTable('Student')}
                {selectedFilter === 'Committee' && renderTable('Committee')}
                {selectedFilter === 'Admin' && renderTable('Admin')}
            </div>

            <Box style={{ marginTop: '20px' }}>
                <Footer />
            </Box>

            {/* Role Change Menu */}
            <Menu
                id="role-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >
                <MenuItem onClick={() => handleRoleChange('Committee')}>Change to Committee</MenuItem>
                <MenuItem onClick={() => handleRoleChange('Admin')}>Change to Admin</MenuItem>
            </Menu>
        </div>
    );
}

export default ManageUsers;
