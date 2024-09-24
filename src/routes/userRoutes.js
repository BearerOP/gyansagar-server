const express = require('express');
const router = express.Router();
const userAuth = require('../../middleware/userAuth')

const {
  // register,
  login,
  logout,
  profile,
} = require('../controllers/userController');

// router.post('/register', register);

router.post('/login', login);

router.post('/logout', logout);

router.get('/profile',userAuth, profile);

module.exports = router;
