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

const getResponsesByIdQuiz = async (req, res = response) =>{
    try{
        const id = req.params.id;
        const quiz = await UserResponse.find({idQuiz: id});

        return res.status(200).json({
            status: 200,
            data: quiz,
            message: 'Get responses by id quiz success',
        });
    }catch{
        return res.status(400).json({
            status: 400,
            message: 'Error to get responses by id quiz',
        });
    }
}

const deleteUserResponse = async (req, res = response) =>{
    try {
        const id = req.params.id;
        const quiz = await UserResponse.findById(id);
        if(!quiz){
            return res.status(404).json({
                status: 404,
                message: 'User responses not found'
            });
        }
        await UserResponse.deleteOne({_id: id});
        return res.status(200).json({
            status: 200,
            message: 'User responses delete success'
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'Error to delete user responses'
        });
    }
}

module.exports = {
    saveUserResponses,
    getUserResponseById,
    getResponsesByIdQuiz,
    deleteUserResponse,
}