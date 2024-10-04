const express = require('express');
const User = require('../models/User');
const router = express.Router();
// Register a new user
router.post('/register', async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Create a new user
      const user = new User({ name, email, password });
      await user.save();
  
      res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  // Login a user
  router.post('/login', async (req, res) => {
    // ...
  });
  
  // Get user details
  router.get('/user', async (req, res) => {
    // ...
  });
  
  // Update user profile
  router.put('/user', async (req, res) => {
    // ...
  });
  
  // Delete user account
  router.delete('/user', async (req, res) => {
    // ...
  });
  
  module.exports = router;