import express from 'express';
import Awarded from '../models/Awarded';

const router = express.Router();

// Get all awarded scholarships
router.get('/awarded', async (req, res) => {
  try {
    const awarded = await Awarded.findAll();
    res.status(200).json(awarded);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching awarded scholarships', error });
  }
});

// Create an awarded scholarship
router.post('/awarded', async (req, res) => {
  const { awardamount, awarddate, applicationid, userid } = req.body;
  try {
    const newAward = await Awarded.create({
      awardamount, awarddate, applicationid, userid,
    });
    res.status(201).json(newAward);
  } catch (error) {
    res.status(500).json({ message: 'Error creating awarded scholarship', error });
  }
});

export default router;
