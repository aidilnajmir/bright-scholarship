import React, { useState } from 'react';
import { Typography, TextField, Box, FormControl, InputAdornment } from '@mui/material';
import CustomButton from './CustomButton';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

function LoginForm({ onSubmit }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email, password });
    };

    return (
        <Box
            component="form"
            onSubmit={handleFormSubmit}
            sx={{
                width: '100%',
                maxWidth: '400px',
                margin: '100px auto',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Typography variant="h5" align="center" sx={{ marginTop: '10px', marginBottom: '10px', fontWeight: 'bold' }}>
                Login
            </Typography>

            <Typography variant="body2" align="center" sx={{ marginBottom: '30px', color: 'f9f9f9' }}>
                Welcome, please enter the details below to login.
            </Typography>

            <FormControl fullWidth>
                <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    fullWidth
                    sx={{ marginBottom: '15px' }}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            </FormControl>

            <FormControl fullWidth>
                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    fullWidth
                    sx={{ marginBottom: '20px' }}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon />
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            </FormControl>

            <CustomButton label="Login" color="primary" type="submit" fullWidth />
        </Box>
    );
}

export default LoginForm;
