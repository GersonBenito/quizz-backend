const User = require("../models/user.model");
const { response } = require("express");

const login = async(req, res = response) =>{
    try {
        const { email } = req.body;

        const user = await User.findOne({email});

        if(!user){
            return res.status(404).json({
                status: 404,
                message: 'user not found'
            });
        }

        return res.status(200).json({
            status: 200,
            data: { 
                _id: user._id, 
                user: user.user, 
                email: user.email 
            },
            message: 'successful login'
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'occurred an error to login'
        });
    }
}

module.exports = {
    login,
}