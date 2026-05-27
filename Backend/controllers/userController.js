const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
 
//get all users

const getUsers = asyncHandler(async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

//get a single user

const getUser = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

//make a post

const createUser = asyncHandler(async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json(user);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
    console.log(req.body);
});

//Edit a post

const updateUser = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});


//delete a user

const deleteUser = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
                    res.status(404);
        throw new Error('User not found');
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});



//login

const loginUser = asyncHandler(async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        if (!user) {
                    res.status(404);
        throw new Error('User not found');
        }
        if (password !== user.password){
            res.status(404);
        throw new Error('incorrect password!')
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});


module.exports = {
    getUsers, getUser, createUser, updateUser, deleteUser, loginUser
}