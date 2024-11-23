import React, { useState, useEffect } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function ManageUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users data from the API
        // Example: fetch('/api/users').then(response => response.json()).then(data => setUsers(data));
    }, []);

    const handleDelete = (userId) => {
        // Function to handle user deletion
        // Example: deleteUser(userId);
    };

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Manage Users
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Username</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.role}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" component={Link} to={`/admin/edit-user/${user.id}`}>
                                        Edit
                                    </Button>
                                    <Button variant="contained" color="secondary" onClick={() => handleDelete(user.id)}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default ManageUsers;
