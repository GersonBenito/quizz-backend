const { Router } = require('express');
const checkAuth = require('../middleware/auth');
const checkChangePassword = require('../middleware/changePassword');
const { validateCreate } = require('../validators/user');

const router = Router();

const auth = require('../controllers/auth');

router.post('/register', validateCreate, auth.register );
router.post('/login', validateCreate, auth.login);
router.get('/recover-password/:email', checkAuth, auth.recoverPassword);
router.post('/change-password/:id', checkAuth, checkChangePassword, auth.changePassword);

module.exports = router;