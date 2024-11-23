import React, { useState } from 'react';
import { Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import CommitteeHeader from '../components/CommitteeHeader';
import Footer from '../components/Footer';

const sampleApplications = [
    { studentNumber: 12345, name: 'John Doe', applicationStatus: 'Approved', eligibility: 'Eligible', awardStatus: 'Winner' },
    { studentNumber: 67890, name: 'Michael Brown', applicationStatus: 'Approved', eligibility: 'Eligible', awardStatus: 'Finalist' },
    { studentNumber: 11223, name: 'Sarah Johnson', applicationStatus: 'Approved', eligibility: 'Eligible', awardStatus: 'Finalist' },
    { studentNumber: 33456, name: 'Emily Davis', applicationStatus: 'Approved', eligibility: 'Eligible', awardStatus: 'Rejected' },
    { studentNumber: 44567, name: 'Jane Smith', applicationStatus: 'Rejected', eligibility: 'Non-Eligible', awardStatus: 'Rejected' },
];

function VotingPage() {
    const [votedStudent, setVotedStudent] = useState(null);

    const finalists = sampleApplications.filter((application) => application.awardStatus === 'Finalist');

    const handleVote = (studentNumber) => {
        setVotedStudent(studentNumber);
        alert(`You have voted for student with number ${studentNumber}`);
        // Backend integration for recording vote can be added here
    };

    return (
        <div>
            <CommitteeHeader />
            <div style={{ padding: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    Voting on Finalists
                </Typography>

                {finalists.length < 2 ? (
                    <Typography variant="h6" color="textSecondary" style={{ marginTop: '20px' }}>
                        There is only one finalist. The student has been automatically declared the winner.
                    </Typography>
                ) : (
                    <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Student Number</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Application Status</TableCell>
                                    <TableCell>Vote</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {finalists.map((finalist) => (
                                    <TableRow key={finalist.studentNumber}>
                                        <TableCell>{finalist.studentNumber}</TableCell>
                                        <TableCell>{finalist.name}</TableCell>
                                        <TableCell>{finalist.applicationStatus}</TableCell>
                                        <TableCell>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                disabled={votedStudent !== null}
                                                onClick={() => handleVote(finalist.studentNumber)}
                                            >
                                                Vote
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default VotingPage;
