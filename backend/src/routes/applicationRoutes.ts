import express from 'express';
import Application from '../models/Application';

const router = express.Router();

// Get all applications
router.get('/applications', async (req, res) => {
  try {
    const applications = await Application.findAll();
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching applications', error });
  }
});

// Create an application
router.post('/applications', async (req, res) => {
  const {
    studentnumber, phonenumber, gender, dateofbirth, status, cumulativegpa,
    credithourstaken, submissiondate, applicationstatus, eligiblestatus, awardstatus,
  } = req.body;
  try {
    const newApplication = await Application.create({
      studentnumber, phonenumber, gender, dateofbirth, status, cumulativegpa,
      credithourstaken, submissiondate, applicationstatus, eligiblestatus, awardstatus,
    });
    res.status(201).json(newApplication);
  } catch (error) {
    res.status(500).json({ message: 'Error creating application', error });
  }
});

export default router;
