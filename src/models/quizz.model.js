const { Schema, model } = require('mongoose');

const quizzModel = Schema({
    title: { type: String, required: true, },
    description: { type: String, required: true,},
    code: { type: String, required: true },
    numberQuestion: { type: Number, required: true },
    creationDate: { type: Date, required: true },
    listQuestion: [{
        title: { type: String, required: true },
        seconds: { type: Number, required: true },
        score: { type: Number, required: true },
        listResponse: [{
            title: { type: String, required: true },
            isTrue: { type: Boolean, required: true },
        }]
    }]
});

module.exports = model('Quizz', quizzModel);