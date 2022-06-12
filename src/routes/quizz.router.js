const { Router } = require('express');

const router = Router();

const quizz = require('../controllers/quizz.controller');
router.get('/', quizz.getAllQuizz);
router.get('/:id', quizz.getQuizzByIdUser);
router.post('/', quizz.createQuizz);

module.exports = router;