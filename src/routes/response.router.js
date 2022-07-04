const { Router } = require('express');
const router = Router();

const userResponse = require('../controllers/responses.controller');
router.post('/', userResponse.saveUserResponses);
router.get('/:id', userResponse.getUserResponseById);


module.exports = router;