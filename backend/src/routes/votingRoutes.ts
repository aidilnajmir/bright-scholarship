import express from 'express';
import Voting from '../models/Voting';

const router = express.Router();

// Get all votes
router.get('/votes', async (req, res) => {
  try {
    const votes = await Voting.findAll();
    res.status(200).json(votes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching votes', error });
  }
});

// Create a vote
router.post('/votes', async (req, res) => {
  const { vote, votedate, userid, applicationid } = req.body;
  try {
    const newVote = await Voting.create({
      vote, votedate, userid, applicationid,
    });
    res.status(201).json(newVote);
  } catch (error) {
    res.status(500).json({ message: 'Error creating vote', error });
  }
});

export default router;
