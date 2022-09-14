const express = require('express');
const router = express.Router();

const authJWT = require('../middleware/authMiddleware');
const UserController = require('../controllers/userController');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/', authJWT, UserController.getAll);
router.get('/:id', authJWT, UserController.getById);
router.delete('/:id', authJWT, UserController.deleteById);

module.exports = app => app.use('/users', router);