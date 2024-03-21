const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const emp = require('./Models/emp');

const mongoose = require('mongoose');


// Configure body-parser
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', function(req,res,next){
  res.send("user routes works");
})

// CRUD operations

// Create operation (signup)
router.post('./signup', function(req, res, next) {
    let newUser = new User({
      username: req.body.username,
      password: req.body.password
    });
  
    newUser.save()
    .then(savedUser => {
      res.status(200).json({ status: 200, message: 'User added successfully', userObj: savedUser });
    })
    .catch(err => {
      console.error('Error saving user:', err);
      res.status(500).json({ status: 500, message: 'Failed to add user' });
    });
  });

// Read operation (signin)
router.post('/signin', (req, res) => {
    const { username, password } = req.body;
    
    User.findOne({ username, password })
      .then(user => {
        if (!user) {
          return res.status(401).json({ message: 'Invalid username or password' });
        }
        res.status(200).json({ message: 'Signin successful' });
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Error finding user' });
      });
  });
// Update operation (change password)
router.put('/changepassword', async (req, res) => {
    try {
      const { username, oldPassword, newPassword } = req.body;
      
      // Find the user and update the password
      const user = await User.findOneAndUpdate(
        { username, password: oldPassword },
        { password: newPassword }
      );
  
      // If user is not found, return error
      if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      // Password changed successfully
      res.status(200).json({ message: 'Password changed successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error updating password' });
    }
  });
// Delete operation (delete account)
router.delete('/deleteaccount', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Find and delete the user
      const deletedUser = await User.findOneAndDelete({ username, password });
  
      // If user is not found, return error
      if (!deletedUser) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      // User deleted successfully
      res.status(200).json({ message: 'Account deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error deleting user' });
    }
  });

module.exports = router;
