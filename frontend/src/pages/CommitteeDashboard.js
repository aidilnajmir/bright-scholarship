import React from 'react';
import { Typography, Card, CardContent, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import CommitteeHeader from '../components/CommitteeHeader';
import Footer from '../components/Footer';

function CommitteeDashboard() {
    const dashboardItems = [
        {
            title: 'View Applications',
            description: 'Review applications categorized by their status (Approved, Rejected, Finalists, Winners).',
            buttonText: 'Go to Applications',
            link: '/committee/view-applications',
            color: 'primary',
        },
        {
            title: 'Vote on Finalists',
            description: 'Cast your vote for the shortlisted finalists. Help determine the scholarship winners.',
            buttonText: 'Start Voting',
            link: '/committee/voting',
            color: 'secondary',
        },
        {
            title: 'Reimbursement Requests',
            description: 'Manage reimbursement requests for students who have won scholarships.',
            buttonText: 'Manage Reimbursements',
            link: '/committee/reimbursement',
            color: 'warning',
        },
    ];

    return (
        <div>
            <CommitteeHeader />
            <div style={{ padding: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    Committee Dashboard
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Welcome to the Committee Dashboard. Here, you can manage applications, cast votes, and handle reimbursement requests.
                </Typography>
                <Grid container spacing={3} style={{ marginTop: '20px' }}>
                    {dashboardItems.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        {item.description}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color={item.color}
                                        component={Link}
                                        to={item.link}
                                    >
                                        {item.buttonText}
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
            <Footer />
        </div>
    );
}

export default CommitteeDashboard;
