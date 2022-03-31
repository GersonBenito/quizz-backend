const User = require('../models/user.model');
const { response } = require("express");


const createUser = async(req, res = response) =>{
    try {
        const { email } = req.body;
        const userFind = await User.findOne({email});
        if(userFind){
            return res.status(302).json({
                status: 302,
                message: 'user already exists with that is email'
            });
        }

        const user = new User(req.body);
        await user.save();

        return res.status(200).json({
            status: 200,
            message: 'user created success',
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'ocurred an error to created an user',
        });
    }
}

const getUserById = async(req, res = response) =>{
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);

        return res.status(200).json({
            status: 200,
            data: user,
            message: 'user get success',
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'ocurred a error to try get the user',
        });
    }
}

module.exports = {
    createUser,
    getUserById,
}