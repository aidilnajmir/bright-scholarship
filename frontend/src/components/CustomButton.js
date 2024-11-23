import React from 'react';
import { Button } from '@mui/material';

function CustomButton({ label, color, onClick, fullWidth = false }) {
    return (
        <Button
            variant="contained"
            color={color || 'primary'}
            fullWidth={fullWidth}
            onClick={onClick}
            style={{ marginTop: '10px' }}
        >
            {label}
        </Button>
    );
}

export default CustomButton;
