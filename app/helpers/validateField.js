const { response } = require('express');
const { validationResult } = require('express-validator');

const validateResult = (req, res = response, next) =>{
    try {
        validationResult(req).throw();
        return next();
    } catch (error) {
        return res.status(403).json({
            status: 403,
            errors: error.array()
        })
    }
}

module.exports = { validateResult }