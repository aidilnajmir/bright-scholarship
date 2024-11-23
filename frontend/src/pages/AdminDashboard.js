import React from 'react';
import { Typography, Card, CardContent, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';
import Footer from '../components/Footer';

function AdminDashboard() {
    const dashboardItems = [
        {
            title: 'Manage Users',
            description: 'View and manage committee members and students.',
            buttonText: 'Go to User Management',
            link: '/admin/manage-users',
            color: 'primary',
        },
        {
            title: 'Set Application Dates',
            description: 'Set start and end dates for the application and voting process.',
            buttonText: 'Manage Dates',
            link: '/admin/manage-dates',
            color: 'secondary',
        },
        {
            title: 'View All Applications',
            description: 'Review all applications and their current status.',
            buttonText: 'Go to Applications',
            link: '/admin/view-applications',
            color: 'warning',
        },
    ];

    return (
        <div>
            <AdminHeader />
            <div style={{ padding: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    Admin Dashboard
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Welcome to the Admin Dashboard. Here, you can manage users, set application dates, and view all applications.
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

export default AdminDashboard;
