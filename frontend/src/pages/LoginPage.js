import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import LoginForm from '../components/LoginForm';

function LoginPage() {
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Add login form submission logic here (e.g., call API)
        console.log('Login form submitted');
    };

    return (
        <Container
            maxWidth="sm"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '80vh',
                paddingTop: '45px',
            }}
        >
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                    Bright Scholarship
                </Typography>
            </Box>

            <LoginForm onSubmit={handleLoginSubmit} />
        </Container>
    );
}

export default LoginPage;
