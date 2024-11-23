import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function SendResultEmails() {
    const handleSendEmails = () => {
        // Logic to send result emails to all applicants
        console.log('Sending result emails...');
    };

    return (
        <Container sx={{ marginTop: 4 }}>
            <Typography variant="h5" gutterBottom>
                Send Result Emails
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={handleSendEmails}
            >
                Send Emails to All Applicants
            </Button>
        </Container>
    );
}

export default SendResultEmails;
