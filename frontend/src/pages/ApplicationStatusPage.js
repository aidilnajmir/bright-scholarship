import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Paper, CircularProgress } from '@mui/material';
import Header from '../components/StudentHeader';
import Footer from '../components/Footer';

function ApplicationStatusPage() {
    // Simulating fetching the application status with a loading state
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState(null); // The application status
    const [error, setError] = useState(null); // For any potential errors during the fetch

    // Simulating a data fetch (e.g., from an API or backend)
    useEffect(() => {
        // Simulate an API call to get the application status
        setTimeout(() => {
            // Example: Fetching status from an API or database (simulated here)
            const fetchStatus = () => {
                // In a real application, replace this with actual API call logic
                return { approved: true, date: '2024-11-20', message: 'Congratulations! Your application has been approved.' };
            };

            try {
                const statusData = fetchStatus();
                setStatus(statusData);
            } catch (err) {
                setError('Failed to fetch application status');
            } finally {
                setLoading(false);
            }
        }, 2000); // Simulate loading time
    }, []);

    return (
        <>
            <Header />
            <Container maxWidth="lg" sx={{ marginTop: '50px', paddingBottom: '70px' }}>
                <Typography variant="h4" gutterBottom>
                    Application Status
                </Typography>
                <Box>
                    {/* Loading spinner while fetching status */}
                    {loading ? (
                        <CircularProgress />
                    ) : error ? (
                        <Typography variant="body1" color="error">
                            {error}
                        </Typography>
                    ) : (
                        <Paper sx={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
                            {/* Application status display */}
                            <Typography variant="h6" gutterBottom>
                                Application Status: {status?.approved ? 'Approved' : 'Pending'}
                            </Typography>
                            <Typography variant="body1" paragraph>
                                {status?.message}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Date of Decision: {status?.date}
                            </Typography>
                        </Paper>
                    )}
                </Box>
            </Container>
            <Footer />
        </>
    );
}

export default ApplicationStatusPage;
