const userModel = require('../models/user.model');
const { response } = require("express");
const { encrypty, compare } = require('../helpers/handleBcrypt');
const { tokenSing } = require('../helpers/generateToken');

const register = async(req, res = response) =>{
    try {
        const { email, password, userName } = req.body;
        const userFind = await userModel.findOne({email});
        if(userFind){
            return res.status(302).json({
                status: 302,
                message: 'user already exists with that email'
            });
        }

        const passwordHash = await encrypty(password);
        const registerUser = await userModel.create({email, userName, password: passwordHash});
    
        return res.status(200).json({
            data: registerUser,
            status: 200,
            message: 'user regitered success',
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'ocurred an error to created an user',
        });
    }
}

const login = async(req, res = response) =>{
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if(!user){
            return res.status(404).json({
                status: 404,
                message: 'user not found'
            });
        }

        // check password 
        const checkPassword = await compare(password, user.password);

        // add session token
        const tokenSession = await tokenSing(user);

        if(!checkPassword){
            return res.status(409).json({
                status: 409,
                message: 'invalid password'
            })
        }

        return res.status(200).json({
            status: 200,
            data: { 
                _id: user._id, 
                userName: user.userName, 
                email: user.email,
                tokenSession 
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
        const userFound = await userModel.findOne({email: emailUser});
        if(!userFound){
            return res.status(404).json({
                status: 404,
                data: {},
                message: 'user not found'
            });
        }

        const { _id, userName, email } = userFound;

        return res.status(200).json({
            status: 200,
            data: { _id, userName, email },
            message: 'user found success'
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            status: 400,
            message: 'occurred an error to recover the user'
        });
    }
}

// TODO: request token session
const changePassword = async(req, res = response) =>{
    try {
        const id = req.params.id;
        const { password } = req.body;
        const passwordHash = await encrypty(password);
        await userModel.updateOne({_id: id}, { $set: { password: passwordHash } });

        return res.status(200).json({
            status: 200,
            message: 'password change success'
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'occurred an error to try change the password'
        });
    }
}

// TODO: in progress dev
const activateAccount = async(req, res = response) =>{
    try {
        return res.status(200).json({
            status: 200,
            message: 'account activated success'
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'ocurred an error to try activated account'
        });
    }
}

module.exports = {
    register,
    login,
    recoverPassword,
    changePassword
}