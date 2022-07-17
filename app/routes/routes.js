const { Router } = require('express');

const router = Router();

const auth = require('./auth');
router.use('/auth', auth);

const quizz = require('./quizz.router');
router.use('/quizz', quizz);

const userResponse = require('./response.router');
router.use('/response', userResponse);

module.exports = router;