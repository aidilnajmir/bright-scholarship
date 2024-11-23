import React, { useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton, Box } from '@mui/material';
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
    const [filteredUsers, setFilteredUsers] = useState(sampleUsers);

    const handleDelete = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
    };

    const handleRoleMenuOpen = (event, user) => {
        // handle opening of the menu for more options
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
                    <Button onClick={() => setFilteredUsers(users)} variant="contained" color="success" style={{ marginRight: '10px' }}>
                        View All
                    </Button>
                    <Button onClick={() => setFilteredUsers(users.filter(user => user.role === 'Student'))} variant="contained" color="primary" style={{ marginRight: '10px' }}>
                        View Students
                    </Button>
                    <Button onClick={() => setFilteredUsers(users.filter(user => user.role === 'Committee'))} variant="contained" color="primary" style={{ marginRight: '10px' }}>
                        View Committees
                    </Button>
                    <Button onClick={() => setFilteredUsers(users.filter(user => user.role === 'Admin'))} variant="contained" color="primary">
                        View Admins
                    </Button>
                </div>

                {/* Admin Table */}
                {filteredUsers.some(user => user.role === 'Admin') && (
                    <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
                        <Typography variant="h6" gutterBottom>Admin Users</Typography>
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
                                {filteredUsers.filter(user => user.role === 'Admin').map((user) => (
                                    <TableRow key={user.id}>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{user.role}</TableCell>
                                        <TableCell>
                                            <IconButton
                                                onClick={(event) => handleRoleMenuOpen(event, user)}
                                                color="primary"
                                            >
                                                <MoreVertIcon />
                                            </IconButton>
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
                )}

                {/* Committee Table */}
                {filteredUsers.some(user => user.role === 'Committee') && (
                    <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
                        <Typography variant="h6" gutterBottom>Committee Users</Typography>
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
                                {filteredUsers.filter(user => user.role === 'Committee').map((user) => (
                                    <TableRow key={user.id}>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{user.role}</TableCell>
                                        <TableCell>
                                            <IconButton
                                                onClick={(event) => handleRoleMenuOpen(event, user)}
                                                color="primary"
                                            >
                                                <MoreVertIcon />
                                            </IconButton>
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
                )}

                {/* Student Table */}
                {filteredUsers.some(user => user.role === 'Student') && (
                    <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
                        <Typography variant="h6" gutterBottom>Student Users</Typography>
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
                                {filteredUsers.filter(user => user.role === 'Student').map((user) => (
                                    <TableRow key={user.id}>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{user.role}</TableCell>
                                        <TableCell>
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
                )}
            </div>
            <Box style={{ marginTop: '20px' }}>
                <Footer />
            </Box>
        </div>
    );
}

export default ManageUsers;
