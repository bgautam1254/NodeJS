const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/userSchema')

const router = express.Router();

// signup route
router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;

        // check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        // hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // new user
        const user = new User({
            username,
            password: hashedPassword,
        });

        // save the user to the database
        await user.save();

        res.status(201).json({ message: 'User created successfully' });
    }

    catch (error) {
        console.error('signUp failed:', error);
        res.status(500).json({ message: 'server error' });
    }
});

// login route
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // find the user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'enter correct userID' });
        }

        // check if the password matches the stored hash
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'password is incorrectd' });
        }

        // generate a  token
        const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET_KEY);

        res.status(200).json({ token });
    }
    catch (error) {
        console.error('login failed:', error);
        res.status(500).json({ message: 'server error' });
    }
});

module.exports = router;
