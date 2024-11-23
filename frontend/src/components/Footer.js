import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
    return (
        <Box sx={{
            backgroundColor: 'black',
            color: 'white',
            padding: '10px 0',
            textAlign: 'center',
            position: 'fixed',
            width: '100%',
            bottom: 0
        }}>
            <Typography variant="body2">
                © 2024 Bright Scholarship. All rights reserved.
            </Typography>
        </Box>
    );
}

export default Footer;
