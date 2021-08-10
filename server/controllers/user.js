import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js'

export const signin = async (req, res) => {
    const {username, password} = req.body;

    try {
        const existingUser = await User.findOne({username});
        
        if(!existingUser) return res.status(404).json({message: "User doesn't exist."})

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)

        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid credentials"})

        const token = jwt.sign({username: existingUser.username, id: existingUser._id}, 'test', {expiresIn:"1h"})
        console.log('test')

        res.status(200).json({result: existingUser, token})
    } catch (error) {
        res.status(500).json({ message: "Something went wrong"})
    }
}

export const signup = async (req, res) => {
    const {username, email, password, confirmPassword} = req.body;
    try {
        const existingUser = await User.findOne({username});
        
        if(existingUser) return res.status(404).json({message: "User already exists."})

        // if(password != confirmPassword) return res.status(400).json({message: "Passwords don't match"})
        // console.log('asdfasdfasdf')

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({username, email, password: hashedPassword})

        // console.log('test')

        const token = jwt.sign({email: result.email, id: result._id}, 'test', {expiresIn: "1h"});

        res.status(200).json({ result, token});
    } catch (error) {

        res.status(500).json({ message: "Something went wrong"})
    }
}