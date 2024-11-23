import React, { useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AdminHeader from '../components/AdminHeader';
import Footer from '../components/Footer';

function ViewAllApplications() {
    const sampleApplications = [
        { studentNumber: 12345, name: 'John Doe', applicationStatus: 'Approved', eligibility: 'Eligible', awardStatus: 'Winner' },
        { studentNumber: 67890, name: 'Michael Brown', applicationStatus: 'Approved', eligibility: 'Eligible', awardStatus: 'Finalist' },
        { studentNumber: 11223, name: 'Sarah Johnson', applicationStatus: 'Approved', eligibility: 'Eligible', awardStatus: 'Finalist' },
        { studentNumber: 33456, name: 'Emily Davis', applicationStatus: 'Approved', eligibility: 'Eligible', awardStatus: 'Rejected' },
        { studentNumber: 44567, name: 'Jane Smith', applicationStatus: 'Rejected', eligibility: 'Non-Eligible', awardStatus: 'Rejected' },
    ];

    const [filter, setFilter] = useState('All');

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredApplications = sampleApplications.filter((application) => {
        if (filter === 'All') return true;
        if (filter === 'Winner') return application.awardStatus === 'Winner';
        if (filter === 'Finalists') return application.awardStatus === 'Finalist';
        if (filter === 'Approved') return application.applicationStatus === 'Approved';
        if (filter === 'Rejected') return application.applicationStatus === 'Rejected';
        return false;
    });

    return (
        <div>
            <AdminHeader />
            <div style={{ padding: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    View All Applications
                </Typography>

                <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h6" style={{ marginRight: '10px' }}>
                        Filter by:
                    </Typography>
                    <Select
                        value={filter}
                        onChange={handleFilterChange}
                        style={{ width: '200px' }}
                    >
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Approved">Approved</MenuItem>
                        <MenuItem value="Rejected">Rejected</MenuItem>
                        <MenuItem value="Finalists">Finalists</MenuItem>
                        <MenuItem value="Winner">Winner</MenuItem>
                    </Select>
                </div>

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Student Number</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Application Status</TableCell>
                                <TableCell>Eligibility</TableCell>
                                <TableCell>Award Status</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredApplications.map((application) => (
                                <TableRow key={application.studentNumber}>
                                    <TableCell>{application.studentNumber}</TableCell>
                                    <TableCell>{application.name}</TableCell>
                                    <TableCell>{application.applicationStatus}</TableCell>
                                    <TableCell>{application.eligibility}</TableCell>
                                    <TableCell>{application.awardStatus}</TableCell>
                                    <TableCell>
                                        {/* Email Button */}
                                        <IconButton color="primary">
                                            <EmailIcon />
                                        </IconButton>
                                        {/* Reimbursement Button (Only for Winners) */}
                                        {application.awardStatus === 'Winner' && (
                                            <IconButton color="secondary">
                                                <MonetizationOnIcon />
                                            </IconButton>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <Footer />
        </div>
    );
}

export default ViewAllApplications;
