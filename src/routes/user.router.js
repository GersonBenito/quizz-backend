const { Router } = require('express');
const user = require('../controllers/user.controller');

const router = Router();

router.post('/', user.createUser);
router.get('/:id', user.getUserById);

module.exports = router;