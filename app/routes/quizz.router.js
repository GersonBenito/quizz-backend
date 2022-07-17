const { Router } = require('express');

const router = Router();

const quizz = require('../controllers/quizz.controller');
router.get('/', quizz.getAllQuizz);
router.get('/:id', quizz.getQuizzByIdUser);
router.get('/details/:id', quizz.getQuizzById);
router.get('/search/:code', quizz.getQuizByCode);
router.delete('/:id', quizz.deleteQuizz);
router.post('/', quizz.createQuizz);

module.exports = router;