const { response } = require("express");
const Quizz = require('../models/quizz.model');
const User = require('../models/user.model');

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
        console.log(error);
        return res.status(400).json({
            status: 400,
            message: 'Error to get quizz by id user'
        });
    }
}

module.exports = {
    createQuizz,
    getAllQuizz,
    getQuizzByIdUser
}