const express = require('express');
const router = express.Router();
const imageUpload = require('../config/imageUpload');

const PostController = require('../controllers/posts.controllers');

router.get('/posts', PostController.getAllPosts);
router.get('/posts/:id', PostController.getPostById);
router.post('/posts', imageUpload.single('image'), PostController.addNewPost);
router.put('/posts/:id', imageUpload.single('image'), PostController.editPost);
router.delete('/posts/:id', PostController.deletePost);

module.exports = router;