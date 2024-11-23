import React, { useState } from 'react';
import { Typography, TextField, Button, Grid } from '@mui/material';

function ManageApplication() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [votingStartDate, setVotingStartDate] = useState('');
    const [votingEndDate, setVotingEndDate] = useState('');

    const handleSave = () => {
        // Save the dates to the server (e.g., save to the database)
    };

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Manage Application
            </Typography>
            <Typography variant="body1" gutterBottom>
                Set the start and end dates for the application period and voting period.
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Application Start Date"
                        type="date"
                        fullWidth
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        InputLabelProps={{ shrink: true }}
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
                    />
                </Grid>
            </Grid>
            <Button variant="contained" color="primary" onClick={handleSave} style={{ marginTop: '20px' }}>
                Save Dates
            </Button>
        </div>
    );
}

export default ManageApplication;
