const router = require('express').Router();
const userController = require('../controller/UserController');

router.post('/register', userController.register); // REGISTER USER
router.post('/login', userController.login); // GET ALL USERS
router.post('/password', userController.modifyPassword); // CHANGE PASSWORD

module.exports = router;
