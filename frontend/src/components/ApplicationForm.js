import React from 'react';
import { TextField, MenuItem, Select, InputLabel, FormControl, Box, Grid } from '@mui/material';
import CustomButton from './CustomButton';

function ApplicationForm({ formData, handleChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Student Number */}
                <TextField
                    fullWidth
                    label="Student Number"
                    name="studentNumber"
                    value={formData.studentNumber}
                    onChange={handleChange}
                    required
                />

                {/* First Name and Last Name - Side by Side */}
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                </Grid>

                {/* Phone Number and Email - Side by Side */}
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Phone Number"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Email Address"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                </Grid>

                {/* Gender, Date of Birth, and Status - Side by Side */}
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth required>
                            <InputLabel>Gender</InputLabel>
                            <Select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                label="Gender"
                            >
                                <MenuItem value="Male">Male</MenuItem>
                                <MenuItem value="Female">Female</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Date of Birth"
                            name="dob"
                            type="date"
                            value={formData.dob}
                            onChange={handleChange}
                            required
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth required>
                            <InputLabel>Status</InputLabel>
                            <Select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                label="Status"
                            >
                                <MenuItem value="Freshman">Freshman</MenuItem>
                                <MenuItem value="Sophomore">Sophomore</MenuItem>
                                <MenuItem value="Junior">Junior</MenuItem>
                                <MenuItem value="Senior">Senior</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                {/* Cumulative GPA and Credit Hours - Side by Side */}
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Cumulative GPA"
                            name="cumulativeGPA"
                            value={formData.cumulativeGPA}
                            onChange={handleChange}
                            type="number"
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Credit Hours Taken"
                            name="creditHours"
                            value={formData.creditHours}
                            onChange={handleChange}
                            type="number"
                            required
                        />
                    </Grid>
                </Grid>

                {/* Submit Button */}
                <CustomButton
                    label="Submit Application"
                    color="primary"
                    fullWidth
                    onClick={handleSubmit}
                />
            </Box>
        </form>
    );
}

export default ApplicationForm;
