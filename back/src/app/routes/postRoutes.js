const express = require('express');
const authJWT = require('../middleware/authMiddleware');
const router = express.Router();

const PostController = require('../controllers/postController');

router.post('/', authJWT, PostController.create);
router.get('/', PostController.getAll);
router.get('/:id', PostController.getById);
router.put('/:id', authJWT, PostController.updateById);
router.delete('/:id', authJWT, PostController.deleteById);

module.exports = app => app.use('/posts', router);