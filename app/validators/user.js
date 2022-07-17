const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateField');

const validateCreate = [
    check('userName')
            // .exists()
            // .not()
            // .isLength({ min: 5 })
            // .isEmpty(),
    ,check('email')
            .exists()
            .isEmail(),
    (req, res, next) =>{
        validateResult(req, res, next);
    }
];

module.exports = { validateCreate }