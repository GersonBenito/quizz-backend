const { Router } = require('express');

const router = Router();

const quizz = require('../controllers/quizz.controller');
router.get('/', quizz.getAllQuizz);
router.post('/', quizz.createQuizz);

module.exports = router;