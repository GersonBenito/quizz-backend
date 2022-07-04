const { Router } = require('express');

const router = Router();

const user = require('./user.router');
router.use('/user', user);

const login = require('./login.router');
router.use('/login', login);

const quizz = require('./quizz.router');
router.use('/quizz', quizz);

const userResponse = require('./response.router');
router.use('/response', userResponse);

module.exports = router;