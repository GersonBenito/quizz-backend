const { Router } = require('express');
const router = Router();

const userResponse = require('../controllers/responses.controller');
router.post('/', userResponse.saveUserResponses);
router.get('/:id', userResponse.getUserResponseById);
router.get('/statistics/:id', userResponse.getResponsesByIdQuiz);
router.delete('/:id', userResponse.deleteUserResponse);


module.exports = router;