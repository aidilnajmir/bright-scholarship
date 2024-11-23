import React from 'react';
import { Typography, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import CommitteeHeader from '../components/CommitteeHeader';
import Footer from '../components/Footer';

const sampleApplications = [
    { studentNumber: 12345, name: 'John Doe', applicationStatus: 'Approved', eligibility: 'Eligible', awardStatus: 'Winner' },
    { studentNumber: 67890, name: 'Michael Brown', applicationStatus: 'Approved', eligibility: 'Eligible', awardStatus: 'Finalist' },
    { studentNumber: 11223, name: 'Sarah Johnson', applicationStatus: 'Approved', eligibility: 'Eligible', awardStatus: 'Finalist' },
    { studentNumber: 33456, name: 'Emily Davis', applicationStatus: 'Approved', eligibility: 'Eligible', awardStatus: 'Rejected' },
    { studentNumber: 44567, name: 'Jane Smith', applicationStatus: 'Rejected', eligibility: 'Non-Eligible', awardStatus: 'Rejected' },
];

function ReimbursementPage() {
    const winner = sampleApplications.find((application) => application.awardStatus === 'Winner');

    const handleReimbursementRequest = (name) => {
        alert(`Reimbursement for ${name} has been requested.`);
        // Backend integration for reimbursement handling can be added here
    };

    return (
        <div>
            <CommitteeHeader />
            <div style={{ padding: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    Reimbursement Request
                </Typography>
                {winner ? (
                    <>
                        <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
                            Winner Details
                        </Typography>
                        <TableContainer component={Paper} style={{ marginTop: '10px' }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Student Number</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Application Status</TableCell>
                                        <TableCell>Eligibility</TableCell>
                                        <TableCell>Award Status</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>{winner.studentNumber}</TableCell>
                                        <TableCell>{winner.name}</TableCell>
                                        <TableCell>{winner.applicationStatus}</TableCell>
                                        <TableCell>{winner.eligibility}</TableCell>
                                        <TableCell>{winner.awardStatus}</TableCell>
                                        <TableCell>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={() => handleReimbursementRequest(winner.name)}
                                            >
                                                Request Reimbursement
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </>
                ) : (
                    <Typography variant="h6" color="textSecondary" style={{ marginTop: '20px' }}>
                        No winner found. Please ensure the scholarship has been awarded.
                    </Typography>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default ReimbursementPage;
