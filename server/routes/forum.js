const router = module.exports = require('express').Router();
const controller = require('../controllers/forum.controller');
const User = require('../models/User');

router.post('/create/category', controller.createCategory);
router.post('/create/topic', controller.createTopic);
router.get('/categories', controller.getCategories);
router.get('/topics/:name', controller.getForumTopicsByName);
router.get('/posts/:category/:topic', controller.getForumPosts);
router.post('/posts/create', controller.createForumPost);