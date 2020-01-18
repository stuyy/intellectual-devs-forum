const router = module.exports = require('express').Router();
const controller = require('../controllers/forum.controller');
const User = require('../models/User');

router.post('/forum/create/category', controller.createCategory);
router.post('/forum/create/topic', controller.createTopic);
