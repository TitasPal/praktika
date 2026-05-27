const express = require('express');
const User = require('../models/userModel');
const router = express.Router();
const { getUsers } = require('../controllers/userController');
const { getUser } = require('../controllers/userController');
const { createUser } = require('../controllers/userController');
const { updateUser } = require('../controllers/userController');
const { deleteUser } = require('../controllers/userController');
const {loginUser} = require('../controllers/userController');

router.get('/', getUsers);

//post user
router.post('/', createUser);

router.post('/login', loginUser);

//get users with id
router.get('/:id', getUser);




//update user
router.put('/:id', updateUser);


//delete user
router.delete('/:id', deleteUser);


module.exports = router;