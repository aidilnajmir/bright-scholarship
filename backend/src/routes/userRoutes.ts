import express from 'express';
import User from '../models/User'; // Import the User model

const router = express.Router();

// Route to get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();  // Fetch all users
    res.status(200).json(users);          // Return users as JSON
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
});

// Route to create a new user
router.post('/users', async (req, res) => {
  const { firstname, lastname, emailaddress, password, role } = req.body;
  try {
    const newUser = await User.create({
      firstname,
      lastname,
      emailaddress,
      password,
      role,
    });
    res.status(201).json(newUser);  // Respond with the created user
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
});

export default router;
