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

module.exports = {
    createQuizz,
    getAllQuizz,
}