import React from 'react';
import { Typography, Card, CardContent, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import StudentHeader from '../components/StudentHeader';
import Footer from '../components/Footer';

function StudentDashboard() {
    const dashboardItems = [
        {
            title: 'Apply for Scholarship',
            description: 'Submit your scholarship application by filling out the required details.',
            buttonText: 'Apply Now',
            link: '/student/apply',
            color: 'primary',
        },
        {
            title: 'View Application Status',
            description: 'Check the status of your scholarship application and its progress.',
            buttonText: 'View Status',
            link: '/student/status',
            color: 'secondary',
        },
    ];

    return (
        <div>
            <StudentHeader />
            <div style={{ padding: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    Student Dashboard
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Welcome to the Student Dashboard. Use the options below to apply for a scholarship or view your application status.
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

export default StudentDashboard;
