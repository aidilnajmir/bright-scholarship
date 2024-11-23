// src/pages/ApplyScholarshipPage.js
import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import Header from '../components/StudentHeader';
import Footer from '../components/Footer';
import ApplicationForm from '../components/ApplicationForm';

function ApplyScholarshipPage() {
    const [formData, setFormData] = useState({
        studentNumber: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        gender: '',
        dob: '',
        status: '',
        cumulativeGPA: '',
        creditHours: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would submit the form data to your backend or another service
        console.log(formData);
    };

    return (
        <>
            <Header />
            <Container maxWidth="lg" sx={{ marginTop: '50px', paddingBottom: '70px' }}>
                <Typography variant="h4" gutterBottom>
                    Scholarship Application
                </Typography>
                <Box>
                    <ApplicationForm
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                </Box>
            </Container>
            <Footer />
        </>
    );
}

export default ApplyScholarshipPage;
