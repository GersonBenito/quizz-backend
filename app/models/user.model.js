const { Schema, model } = require('mongoose');

const userSchema = Schema({
    userName: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('user', userSchema);