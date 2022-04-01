const { Router } = require('express');
const router = Router();

const login = require('../controllers/login.controller');

router.post('/', login.login);
router.get('/recover-password/:email', login.recoverPassword);
router.post('/change-password', login.changePassword);

module.exports = router;