const router = module.exports = require('express').Router();
const controller = require('../controllers/forum.controller');
const User = require('../models/User');

router.post('/create/category', controller.createCategory);
router.post('/create/topic', controller.createTopic);
