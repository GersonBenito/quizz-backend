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
                userName: user.userName, 
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

const recoverPassword = async(req, res = response) =>{
    try {
        const emailUser = req.params.email;
        const userFound = await User.findOne({email: emailUser});
        if(!userFound){
            return res.status(404).json({
                status: 404,
                data: {},
                message: 'user not found'
            });
        }
        console.log(userFound);
        const { _id, userName, email } = userFound;

        return res.status(200).json({
            status: 200,
            data: { _id, userName, email },
            message: 'user found success'
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'occurred an error to recover the user'
        });
    }
}

const changePassword = async(req, res = response) =>{
    try {
        const id = req.params.id;
        const { password } = req.body;
        await User.updateOne({_id: id}, { $set: { password: password } });

        return res.status(200).json({
            status: 200,
            message: 'password change success'
        });
    } catch (error) {
        console.log('error', error);
        return res.status(400).json({
            status: 400,
            message: 'occurred an error to try change the password'
        });
    }
}

module.exports = {
    login,
    recoverPassword,
    changePassword
}