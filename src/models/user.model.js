const { Schema, model } = require('mongoose');

const userSchema = Schema({
    user: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
});

module.exports = model('User', userSchema);