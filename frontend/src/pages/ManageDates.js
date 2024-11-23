import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button, Grid, Box } from '@mui/material';
import AdminHeader from '../components/AdminHeader';
import Footer from '../components/Footer';

function ManageDates() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [votingStartDate, setVotingStartDate] = useState('');
    const [votingEndDate, setVotingEndDate] = useState('');
    const [error, setError] = useState('');

    const handleSave = () => {
        if (new Date(startDate) >= new Date(endDate)) {
            setError('Application end date must be after application start date.');
            return;
        }
        if (new Date(endDate) >= new Date(votingStartDate)) {
            setError('Voting start date must be after application end date.');
            return;
        }
        if (new Date(votingStartDate) >= new Date(votingEndDate)) {
            setError('Voting end date must be after voting start date.');
            return;
        }

        // Reset error and proceed with saving dates to the server (e.g., save to the database)
        setError('');
        // Save the dates (e.g., make an API call or save to state)
        console.log('Dates saved:', { startDate, endDate, votingStartDate, votingEndDate });
    };

    useEffect(() => {
        if (new Date(startDate) >= new Date(endDate)) {
            setError('Application end date must be after application start date.');
        } else if (new Date(endDate) >= new Date(votingStartDate)) {
            setError('Voting start date must be after application end date.');
        } else if (new Date(votingStartDate) >= new Date(votingEndDate)) {
            setError('Voting end date must be after voting start date.');
        } else {
            setError('');
        }
    }, [startDate, endDate, votingStartDate, votingEndDate]);

    return (
        <div>
            <AdminHeader />
            <div style={{ padding: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    Manage Dates
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Set the start and end dates for the application period and voting period.
                </Typography>

                {/* Display error if date validation fails */}
                {error && <Typography color="error" variant="body2">{error}</Typography>}

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Application Start Date"
                            type="date"
                            fullWidth
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            InputLabelProps={{ shrink: true }}
                            inputProps={{
                                min: new Date().toISOString().split("T")[0] // Restrict to today's date or later
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Application End Date"
                            type="date"
                            fullWidth
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            InputLabelProps={{ shrink: true }}
                            inputProps={{
                                min: startDate // Ensure the application end date is after the start date
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Voting Start Date"
                            type="date"
                            fullWidth
                            value={votingStartDate}
                            onChange={(e) => setVotingStartDate(e.target.value)}
                            InputLabelProps={{ shrink: true }}
                            inputProps={{
                                min: endDate // Ensure the voting start date is after the application end date
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Voting End Date"
                            type="date"
                            fullWidth
                            value={votingEndDate}
                            onChange={(e) => setVotingEndDate(e.target.value)}
                            InputLabelProps={{ shrink: true }}
                            inputProps={{
                                min: votingStartDate // Ensure the voting end date is after the voting start date
                            }}
                        />
                    </Grid>
                </Grid>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                    style={{ marginTop: '20px' }}
                    disabled={!!error}
                >
                    Save Dates
                </Button>
            </div>
            <Box style={{ marginTop: '20px' }}>
                <Footer />
            </Box>
        </div>
    );
}

export default ManageDates;
