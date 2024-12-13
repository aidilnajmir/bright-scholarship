import express from 'express';
import ScholarshipProcess from '../models/ScholarshipProcess';

const router = express.Router();

// Get all scholarship processes
router.get('/scholarship-process', async (req, res) => {
  try {
    const processes = await ScholarshipProcess.findAll();
    res.status(200).json(processes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching scholarship processes', error });
  }
});

// Create a scholarship process
router.post('/scholarship-process', async (req, res) => {
  const { applicationstart, applicationend, votingstart, votingend, active } = req.body;
  try {
    const newProcess = await ScholarshipProcess.create({
      applicationstart, applicationend, votingstart, votingend, active,
    });
    res.status(201).json(newProcess);
  } catch (error) {
    res.status(500).json({ message: 'Error creating scholarship process', error });
  }
});

export default router;
