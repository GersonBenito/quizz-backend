const { response } = require("express");
const UserResponse = require('../models/response.model');

const saveUserResponses = async (req, res = response) =>{
    try {
        const data = req.body;
        const userResponse = new UserResponse(data);
        await userResponse.save();
        return res.status(200).json({
            status: 200,
            data: userResponse._id,
            message: 'User responses save success',
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'Error to save user responses'
        });
    }
}

const getUserResponseById = async(req, res = response) =>{
    try {
        const id = req.params.id;
        const userResponses = await UserResponse.findById(id);
        return res.status(200).json({
            status: 200,
            data: userResponses,
            message: 'Get user response by id success'
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'Error to get user response by id'
        });
    }
}

module.exports = {
    saveUserResponses,
    getUserResponseById,
}