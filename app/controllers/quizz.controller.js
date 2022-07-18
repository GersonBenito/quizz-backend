const { response } = require("express");
const Quizz = require('../models/quizz.model');

const createQuizz = async(req, res = response) =>{
    try {

        const data = req.body;
        const quizz = new Quizz(data);
        await quizz.save();

        return res.status(200).json({
            status: 200,
            message: 'Quizz created success'
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'error to add quizz'
        });
    }
}

const getAllQuizz = async(req, res = response) =>{
    try {

        const quizz = await Quizz.find();

        return res.status(200).json({
            status: 200,
            data: quizz,
            message: 'Get all quizz success',
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'Error to get all quizz',
        });
    }
}

const getQuizzByIdUser = async (req, res = response) =>{
    try {
        const _id = req.params.id;
        const quizz = await Quizz.find({user: _id}).populate('user', 'userName email');
        return res.status(200).json({
            status: 200,
            data: quizz,
            message: 'get quizz by id user success'
        });
    } catch (error) {
        console.log('error',error);
        return res.status(400).json({
            status: 400,
            message: 'Error to get quizz by id user'
        });
    }
}

const deleteQuizz = async (req, res = response) =>{
    try {

        const id = req.params.id;
        const quizz = await Quizz.findById(id);
        if(!quizz){
            return res.status(404).json({
                status: 404,
                message: 'Delete quizz by id not found',
            });
        }
        await Quizz.deleteOne({_id: id});

        return res.status(200).json({
            status: 200,
            message: 'Quizz delete success'
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'Error to delete quizz'
        });
    }
}

const getQuizzById = async (req, res = response) =>{
    try {
        const id = req.params.id;
        const quizz = await Quizz.findById({_id: id});
        if(!quizz){
            return res.status(404).json({
                status: 404,
                message: 'Id Quizz not found'
            });
        }

       return res.status(200).json({
        status: 200,
        data: quizz,
        message: 'Get quizz by id success'
       }); 
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'Error to get quizz by id'
        });
    }
}

const getQuizByCode = async (req, res = response) =>{
    try {
        const code = req.params.code;
        const quiz = await Quizz.findOne({code: code});
        if(!quiz){
            return res.status(404).json({
                status: 404,
                message: 'Invalid code'
            });
        }
        return res.status(200).json({
            status: 200,
            data: quiz,
            message: 'Quiz by code get success'
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: 'Error to get quiz by code'
        });
    }
}

module.exports = {
    createQuizz,
    getAllQuizz,
    getQuizzByIdUser,
    deleteQuizz,
    getQuizzById,
    getQuizByCode,
}