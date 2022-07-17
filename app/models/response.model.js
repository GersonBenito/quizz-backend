const { Schema, model } = require('mongoose');

const UserResponse = Schema({
    idQuiz: { type: Schema.Types.ObjectId, required: true, },
    participantName: { type: String, required: true },
    date: { type: Date, required: true },
    amountQuestions: { type: Number, },
    amountCorrect: { type: Number, },
    amountIncorrect: { type: Number, },
    scoreTotal: { type: Number, required: true },
    listUserResponse: { type: Array, "default": [] }
});

module.exports = model('response', UserResponse);